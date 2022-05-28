import { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import BaseModal from './components/generic/modal/BaseModal'
import BaseInput from './components/generic/form/BaseInput'
import BaseButton from './components/generic/button/BaseButton'

const App = () => {
  const [open, setOpen] = useState(false)

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
    setOpen(false)
  }

  return (
    <div className="flex align-center justify-center h-screen">
      <BaseButton onClick={() => setOpen(true)} className="px-6 py-3 my-auto">
        Click!
      </BaseButton>
      <BaseModal title="Payment successful" open={open} setOpen={setOpen}>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string().required('Required')
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <BaseInput label="Email" name="email" type="email" />
            <BaseInput label="Password" name="password" type="password" />
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <BaseButton
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 focus:outline-none sm:col-start-2 sm:text-sm"
              >
                Simpan
              </BaseButton>
              <BaseButton
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 sm:mt-0 sm:col-start-1 sm:text-sm"
                secondary
                onClick={() => setOpen(false)}
              >
                Batal
              </BaseButton>
            </div>
          </Form>
        </Formik>
      </BaseModal>
    </div>
  )
}

export default App
