import { useState } from 'react'
import BaseModal from './components/generic/modal/BaseModal'

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex align-center justify-center h-screen">
      <button
        className="inline-flex items-center px-6 py-3 my-auto border border-transparent text-base font-medium rounded-md shadow-sm text-secondary bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={() => setOpen(true)}
      >
        Click!
      </button>
      <BaseModal title="Payment successful" open={open} setOpen={setOpen} />
    </div>
  )
}

export default App
