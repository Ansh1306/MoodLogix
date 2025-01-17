import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4  ">MoodLogix📝</h1>
        <p className="text-2xl text-white/60 mb-4">
          AI-powered journal that tracks your emotions. Write daily, gain
          insights into your mood patterns, and boost your emotional well-being.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl ring-white  hover:ring-2">
              Start Journaling
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
