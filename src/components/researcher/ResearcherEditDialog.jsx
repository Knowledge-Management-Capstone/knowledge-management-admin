import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Dialog from '../common/Dialog'
import BaseInput from '../generic/form/input/BaseInput'
import BaseSelect from '../generic/form/input/BaseSelect'

import { updateResearcher } from '../../store/actions/researcherActions'

const ResearcherEditDialog = ({ researcher }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const { fullName, email, userId, faculty, major, accountType } = researcher

  const handleSubmit = (values, { setSubmitting }) => {
    const { fullName, email, userId, faculty, major, accountType } = values
    dispatch(
      updateResearcher({ fullName, email, userId, faculty, major, accountType })
    )

    setSubmitting(false)
    setOpen(false)
  }

  return (
    <Dialog open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          fullName,
          email,
          userId,
          faculty,
          major,
          accountType
        }}
        validationSchema={Yup.object({})}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          <BaseInput label="Full Name" name="fullName" type="text" />
          <BaseInput label="Email" name="email" type="email" />
          <BaseInput label="NIM / NIP" name="userId" type="text" />
          <BaseInput label="Faculty" name="faculty" type="text" />
          <BaseInput label="Major" name="major" type="text" />
          <BaseSelect label="Account Type" name="accountType">
            <option value="" disabled defaultValue>
              Select account type
            </option>
            <option value="lecturer">Lecturer</option>
            <option value="student">Student</option>
          </BaseSelect>
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
            >
              Simpan
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              onClick={() => setOpen(false)}
            >
              Batal
            </button>
          </div>
        </Form>
      </Formik>
    </Dialog>
  )
}

export default ResearcherEditDialog
