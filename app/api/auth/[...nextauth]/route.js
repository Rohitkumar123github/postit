import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '../../../../prisma/client'
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
//this pages code is for giving a customized name to our signIN page rather than the 
//name provided by the google
pages: {
  signIn : '/signin'
}
}

const handler = NextAuth({authOptions})

export { handler as GET, handler as POST }