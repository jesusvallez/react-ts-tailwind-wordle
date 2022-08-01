import { useState } from 'react'
import { words } from '@/content/words'
import Wordle from './components/Wordle'

function App(): JSX.Element {
  const [solution] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  )

  return (
    <div className="my-0 mx-auto flex h-screen max-w-3xl flex-col items-center gap-2 p-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to my Wordle</h1>
      <h2 className="text-1xl w-full border-b border-gray-200">
        created by @jesusvallez
      </h2>
      <Wordle solution={solution} />
    </div>
  )
}

export default App
