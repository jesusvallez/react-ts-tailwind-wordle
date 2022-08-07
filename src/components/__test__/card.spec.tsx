import { getByTestId, render, screen } from '@testing-library/react'
import Card from '../Card'

describe('<Card />', () => {
  it('Print and check word', () => {
    const { container } = render(<Card state={'blank'}>testing</Card>)

    expect(screen.getByText(/testing/i)).toBeTruthy()
    expect(getByTestId(container, 'card').style.animationDelay).toEqual('none')
  })

  it('Check card when is the second element', () => {
    const id = 2
    const { container } = render(
      <Card id={id} state={'blank'}>
        testing
      </Card>,
    )

    expect(screen.getByText(/testing/i)).toBeTruthy()
    expect(getByTestId(container, 'card').style.animationDelay).toEqual(
      `${id}00ms`,
    )
  })
})
