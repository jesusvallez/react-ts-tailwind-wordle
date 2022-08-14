import Wordle from './components/Wordle'

function App(): JSX.Element {
  return (
    <div className="bg-white dark:bg-neutral-800">
      <div className="my-0 mx-auto flex h-screen max-w-3xl flex-col items-center gap-2 p-4 text-center text-stone-900 dark:text-stone-100">
        <h1 className="text-4xl font-bold ">Welcome to my Wordle</h1>
        <h2 className="text-1xl w-full border-b border-gray-200">
          created by @jesusvallez
        </h2>
        <Wordle />
      </div>
    </div>
  )
}

export default App
