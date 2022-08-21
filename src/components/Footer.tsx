import { memo, ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
    <a
      className="mx-2 flex items-center justify-center gap-1 text-xs hover:underline md:text-base"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/jesusvallez/react-ts-tailwind-wordle"
    >
      Created with{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>{' '}
      by Jesús Vállez
    </a>
  )
}

export default memo(Footer)
