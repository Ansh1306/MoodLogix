import HistoryChart from '@/components/HistoryChart'
import { getUserFromClerkID } from '@/util/auth'
import { prisma } from '@/util/db'

const getData = async () => {
  const user = await getUserFromClerkID()
  const analyses = await prisma.entryAnalysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })
  const total = analyses.reduce((acc, curr) => {
    return acc + curr.sentimentScore
  }, 0)
  const average = total / analyses.length
  return { analyses, average }
}

const HistoryPage = async () => {
  const { analyses, average } = await getData()
  return (
    <div className="h-full px-6 py-8">
      <div>
        <h1 className="text-2xl mb-4">{`Avg. Sentiment: ${average.toFixed(
          2
        )}`}</h1>
      </div>
      <div className="h-full w-full">
        <HistoryChart
          data={analyses.map((a) => ({
            updatedAt: a.createdAt.toISOString(),
            sentimentScore: a.sentimentScore,
            mood: a.mood, // Make sure this property exists in your data
            color: a.color, // Make sure this property exists in your data
          }))}
        />
      </div>
    </div>
  )
}

export default HistoryPage
