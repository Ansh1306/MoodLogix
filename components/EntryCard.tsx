
type EntryCardProps = {
  entry: {
    createdAt: string | number | Date
    analysis?: {
      summary?: string
      mood?: string
    } | null
    // ... other properties
  }
}
const EntryCard = ({ entry }: EntryCardProps) => {
  const date = new Date(entry.createdAt).toDateString()
  const analysis = entry.analysis || {}

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">
        {analysis.summary || 'No summary available'}
      </div>
      <div className="px-4 py-4 sm:px-6">
        {analysis.mood || 'No mood information available'}
      </div>
    </div>
  )
}

export default EntryCard
