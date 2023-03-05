import { PropsWithChildren, ReactElement } from 'react'
import Button from './Button'

interface Props {
  title?: string
  close: (state: boolean) => void
}

const Modal = ({ close, title, children }: PropsWithChildren<Props>): ReactElement => {
  return (
    <>
      <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden text-left outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl px-4">
          {/* content */}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                onClick={() => close(false)}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-black outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* body */}
            <div className="relative flex-auto p-6">
              <p className="my-4 text-lg leading-relaxed text-slate-700">{children}</p>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <Button
                onClick={() => close(false)}
                className="dark:border-neutral-500 dark:text-neutral-800 dark:hover:bg-neutral-500 dark:hover:text-white dark:active:bg-neutral-400"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}

export default Modal
