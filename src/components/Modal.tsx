import { ReactElement } from 'react'
import Button from './Button'

interface Props {
  close: (state: boolean) => void
}

const Modal = ({ close }: Props): ReactElement => {
  return (
    <>
      <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden text-left outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl px-4">
          {/* content */}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/* header */}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h3>
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
              <p className="my-4 text-lg leading-relaxed text-slate-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti quae alias vitae placeat iste maiores incidunt odio
                hic. Omnis temporibus tempore fugiat officiis libero, cupiditate
                odio aspernatur eum totam rerum. Temporibus dicta vitae aliquam
                autem itaque facere aperiam repellat minima rem ea, magnam nisi
                dolorem! Modi exercitationem cum eum animi!
              </p>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <Button onClick={() => close(false)}>Close</Button>
              <Button onClick={() => close(false)}>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}

export default Modal
