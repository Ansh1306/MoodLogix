import { qa } from '@/util/ai'
import { getUserFromClerkID } from '@/util/auth'
import { prisma } from '@/util/db'
import { NextResponse, NextRequest } from 'next/server'

export const POST = async (request: NextRequest) => {
  const { question } = await request.json()
  const user = await getUserFromClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id :true,
      content: true,
      createdAt: true,
    },
  })
  const formattedEntries = entries.map((entry) => ({
    ...entry,
    createdAt: entry.createdAt.toISOString(),
  }))

  const answer = await qa(question, formattedEntries)
  return NextResponse.json({ data: answer })
}
