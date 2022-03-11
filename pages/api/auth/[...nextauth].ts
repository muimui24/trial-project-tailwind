import { getToken } from 'next-auth/jwt'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'john',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      authorize: (credentials, req) => {
        const user = {
          id: 1,
          name: 'john',
          email: 'jsmith@example.com',
        }
        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },

    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }
      return session
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
  },
})
