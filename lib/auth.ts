import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { createAccessToken, fetchGemhausData } from './utils';

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

        const { data, error } = await fetchGemhausData('/users/authorize', {
          method: 'POST',
          body: formData,
        });
        if (error) throw new Error(error.message);

        return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || 'USER';
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
    async signIn({ user }) {
      const { name, email, image } = user;
      user.accessToken = createAccessToken(email as string);

      const formData = new FormData();
      formData.append('name', name as string);
      image && formData.append('image', image as string);

      await fetchGemhausData(`/users/upsert/${email}`, {
        method: 'POST',
        body: formData,
      });
      return true;
    },
  },
};
