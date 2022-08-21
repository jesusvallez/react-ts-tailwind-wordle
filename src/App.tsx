import Footer from './components/Footer'
import Keyboard from './components/Keyboard'
import Nav from './components/Nav'
import Wordle from './components/Wordle'
import useVh from './hooks/useVh'

function App(): JSX.Element {
  const vh = useVh()

  return (
    <div
      style={{ height: `${100 * vh}px` }}
      className="grid grid-cols-1 grid-rows-[auto_1fr_auto_50px] items-center justify-center dark:bg-neutral-700 dark:text-neutral-100"
    >
      <Nav />
      <Wordle />
      <Keyboard />
      <Footer />
    </div>
  )
}

export default App
