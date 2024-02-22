import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

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
          return null;

        const { email, password } = credentials;

        // Get user from DB

        // Match password

        // Return user
        return { id: 'alamin', email, name: 'alamin' };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name, image } = user;

      // Check if the user exists in the DB

      // If yes, update the information

      // Otherwise, create a new user in the DB
      return true;
    },
  },
};
