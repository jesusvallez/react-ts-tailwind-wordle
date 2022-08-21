import Footer from './components/Footer'
import Nav from './components/Nav'
import Wordle from './components/Wordle'
import useVh from './hooks/useVh'

function App(): JSX.Element {
  const vh = useVh()

  return (
    <div
      style={{ height: `${100 * vh}px` }}
      className="grid grid-cols-1 grid-rows-[auto_1fr_50px] items-center justify-center dark:bg-neutral-700 dark:text-neutral-100"
    >
      <Nav />
      <div className="my-0 mx-auto flex max-w-3xl flex-col items-center gap-2 self-start px-2 pt-4 pb-2 text-center text-stone-900 dark:text-stone-100 sm:px-6 sm:pt-6 sm:pb-4">
        <Wordle />
      </div>
      <Footer />
    </div>
  )
}

export default App
