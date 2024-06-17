'use client'
 
import { goToOtherPage } from './actions'
 
export default function Button() {
  return (
    <>
      <button
      className="border-2 rounded-sm border-white py-2 px-4"
        onClick={async () => {
          await goToOtherPage()
        }}
      >
        Click me
      </button>
    </>
  )
}