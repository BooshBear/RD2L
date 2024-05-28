import NextAuth from 'next-auth/next'
import { getAuthOptions } from '../../../auth'

import type { NextRequest } from 'next/server'


export const dynamic = 'force-dynamic';
async function handler(req: NextRequest, ctx: { params: { nextauth: string[] } }) {
  return NextAuth(req, ctx, getAuthOptions(req))
}
export { handler as GET, handler as POST };
