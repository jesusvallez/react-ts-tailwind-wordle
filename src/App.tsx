import { useState } from 'react'
import Wordle from './components/Wordle'
import { words } from './content/words'

function App(): JSX.Element {
  const [solution] = useState<string>(
    words[Math.floor(Math.random() * words.length)],
  )

  return (
    <div className="flex flex-col items-center h-screen m-8 pt-10">
      <h1 className="text-4xl pb-2 font-bold">Welcome to my Wordle</h1>
      <h2 className="text-1xl border-b border-gray-200 text-center w-full pb-2 mb-4">
        created by @jesusvallez
      </h2>
      <Wordle solution={solution} />
    </div>
  )
}

export default App
