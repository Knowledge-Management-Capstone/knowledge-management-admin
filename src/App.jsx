import { useEffect, useState } from 'react'
import axios from 'axios'

import { email, password } from './utils/validation'

import BaseButton from './components/generic/button/BaseButton'
import BaseInput from './components/generic/form/BaseInput'
import FormModal from './components/FormModal'

const App = () => {
  const [open, setOpen] = useState(false)

  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
    setOpen(false)
  }

  useEffect(() => {
    axios.get('/').then(res => console.log(res.data))
  }, [])

  return (
    <div className="flex align-center justify-center h-screen">
      <BaseButton onClick={() => setOpen(true)} className="px-6 py-3 my-auto">
        Click!
      </BaseButton>
      <FormModal
        title="Payment successful"
        open={open}
        setOpen={setOpen}
        initialValues={initialValues}
        validation={{ email, password }}
        handleSubmit={handleSubmit}
      >
        <BaseInput label="Email" name="email" type="email" />
        <BaseInput label="Password" name="password" type="password" />
      </FormModal>
    </div>
  )
}

export default App
