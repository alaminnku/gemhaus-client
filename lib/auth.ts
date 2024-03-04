import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { fetchGemhausData } from './utils';
import { JWT } from 'next-auth/jwt';
import { sign } from 'jsonwebtoken';

// NextAuth options
export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error('Email or password is missing');

        const formData = new FormData();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);

        const { data, error } = await fetchGemhausData('/users/sign-in', {
          method: 'POST',
          body: formData,
        });
        if (error) throw new Error(error.message);

        return {
          id: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email, image } = user;
      user.accessToken = createAccessToken(email as string);
      user.refreshToken = createRefreshToken(email as string);
      user.expiresIn = createTokenExpiry();

      const formData = new FormData();
      formData.append('name', name as string);
      image && formData.append('image', image as string);

      await fetchGemhausData(`/users/upsert/${email}`, {
        method: 'POST',
        body: formData,
      });
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || 'USER';
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresIn = user.expiresIn;
      }
      if (Date.now() < token.expiresIn) return token;
      return await refreshToken(token);
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

// Create access token
const createAccessToken = (email: string) =>
  sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '20s' });

// Create refresh token
const createRefreshToken = (email: string) =>
  sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '30d' });

// Get token expiry
const createTokenExpiry = () => new Date().setTime(Date.now() + 20000);

// Refresh token
async function refreshToken(token: JWT) {
  const { data, error } = await fetchGemhausData('/auth/refresh-token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.refreshToken}`,
    },
  });
  if (error) return token;

  return {
    ...token,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    expiresIn: data.expiresIn,
  };
}
