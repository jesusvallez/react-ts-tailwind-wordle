import { getByTestId, render, screen } from '@testing-library/react'
import Card from '../Card'

describe('<Card />', () => {
  it('Print and check word', () => {
    const { container } = render(
      <Card isCorrect state={'blank'}>
        testing
      </Card>,
    )

    expect(screen.getByText(/testing/i)).toBeTruthy()
    expect(getByTestId(container, 'card').className).toContain(`0ms`)
  })

  it('Check card when is the second element', () => {
    const id = 2
    const { container } = render(
      <Card isCorrect id={id} state={'blank'}>
        testing
      </Card>,
    )

    expect(screen.getByText(/testing/i)).toBeTruthy()
    expect(getByTestId(container, 'card').className).toContain(`${id}00ms`)
  })
})
