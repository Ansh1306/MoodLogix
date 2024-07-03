import Editor from '@/components/Editor'
import { getUserFromClerkID } from '@/util/auth'
import { prisma } from '@/util/db'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const getEntry = async (id: string) => {
  const user = await getUserFromClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const JournalEditorPage = async ({ params }: { params: Params }) => {
  const entry = await getEntry(params.id)

  if (!entry) {
    return <div>Entry not found</div>
  }

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  )
}

export default JournalEditorPage
