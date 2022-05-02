import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  //   Next Auth page config
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    // Create Username
    // John Swan
    // johnswan

    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub
      return session
    },
  },
})
