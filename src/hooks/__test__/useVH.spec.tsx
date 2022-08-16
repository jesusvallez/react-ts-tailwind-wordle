import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import useVH from '../useVh'

describe('useVH', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should set custom CSS property "--vh" that equals to one hundredth of inner height', async () => {
    const App = (): JSX.Element => {
      useVH()
      return <div>Hello, world</div>
    }

    const { container } = render(<App />)
    expect(container).toBeTruthy()

    const vh = String(window.innerHeight / 100)
    const vhStyle = document.documentElement.style.getPropertyValue('--vh')
    expect(vhStyle).toEqual(`${vh}px`)
  })

  it('should return "vh" value', () => {
    const App = (): JSX.Element => {
      const appVh = useVH()
      return <div data-testid="container">{appVh}</div>
    }

    const { container } = render(<App />)
    expect(container).toBeTruthy()

    const vh = String(window.innerHeight / 100)
    expect(screen.getByTestId('container').textContent).toBe(vh)
  })

  it('should update "vh" value if a window is resized', () => {
    const App = (): JSX.Element => {
      const appVh = useVH()
      return <div data-testid="container">{appVh}</div>
    }

    const { container } = render(<App />)
    expect(container).toBeTruthy()

    const newHeight = 500
    const newVh = String(newHeight / 100)

    act(() => {
      Object.assign(window, { innerHeight: newHeight })
    })

    fireEvent(window, new Event('resize'))

    const vhStyle = document.documentElement.style.getPropertyValue('--vh')

    expect(vhStyle).toEqual(`${newVh}px`)
    expect(screen.getByTestId('container').textContent).toBe(newVh)
  })

  it('should work with multiple instances', () => {
    const App = (): JSX.Element => {
      const vh1 = useVH()
      const vh2 = useVH()
      const vh3 = useVH()

      return (
        <>
          <div data-testid="container1">{vh1}</div>
          <div data-testid="container2">{vh2}</div>
          <div data-testid="container3">{vh3}</div>
        </>
      )
    }

    const { container } = render(<App />)
    expect(container).toBeTruthy()

    const newHeight = 500
    const newVh = String(newHeight / 100)

    act(() => {
      Object.assign(window, { innerHeight: newHeight })
    })

    fireEvent(window, new Event('resize'))

    const vhStyle = document.documentElement.style.getPropertyValue('--vh')
    expect(vhStyle).toEqual(`${newVh}px`)

    expect(screen.getByTestId('container1').textContent).toBe(newVh)
    expect(screen.getByTestId('container2').textContent).toBe(newVh)
    expect(screen.getByTestId('container3').textContent).toBe(newVh)
  })

  it('should remove custom CSS property "--vh" if all components with the hook get unmounted', async () => {
    const Child1 = (): JSX.Element => {
      useVH()
      return <div>Hello, world 1!</div>
    }

    const Child2 = (): JSX.Element => {
      useVH()
      return <div>Hello, world 2!</div>
    }

    const App = (): JSX.Element => {
      const [child1Shown, setChild1Shown] = useState(true)
      const [child2Shown, setChild2Shown] = useState(true)

      return (
        <>
          <button type="button" onClick={() => setChild1Shown(false)}>
            Hide child 1
          </button>

          <button type="button" onClick={() => setChild2Shown(false)}>
            Hide child 2
          </button>

          {child1Shown && <Child1 />}
          {child2Shown && <Child2 />}
        </>
      )
    }

    const { container } = render(<App />)
    expect(container).toBeTruthy()

    const vh = String(window.innerHeight / 100)
    let vhStyle = document.documentElement.style.getPropertyValue('--vh')
    expect(vhStyle).toEqual(`${vh}px`)

    userEvent.click(screen.getByRole('button', { name: 'Hide child 1' }))
    vhStyle = document.documentElement.style.getPropertyValue('--vh')
    expect(vhStyle).toEqual(`${vh}px`)

    userEvent.click(screen.getByRole('button', { name: 'Hide child 2' }))
    await waitFor(() => {
      vhStyle = document.documentElement.style.getPropertyValue('--vh')
      expect(vhStyle).toEqual('')
    })
  })
})
