import { Link } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/outline'

import { email, password } from '~/utils/validation'

import BaseButton from '~/components/generic/button/BaseButton'
import BaseCheckbox from '~/components/generic/form/BaseCheckbox'
import BaseForm from '~/components/generic/form/BaseForm'
import BaseInput from '~/components/generic/form/BaseInput'

const Login = () => {
  const initialValues = { email: '', password: '', remember: false }

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
          <LockClosedIcon className="h-108 w-10 text-primary" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
          <BaseForm
            initialValues={initialValues}
            validation={{ email, password }}
            handleSubmit={handleSubmit}
          >
            <BaseInput label="Email" name="email" type="email" />
            <BaseInput label="Password" name="password" type="password" />
            <div className="flex items-center justify-between">
              <BaseCheckbox label="Remember me" name="remember" />
              <div className="text-sm mt-3">
                <Link
                  to="#"
                  className="font-medium text-primary hover:text-accent"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <BaseButton className="px-4 py-2 w-full mt-6" type="submit">
              Sign In
            </BaseButton>
          </BaseForm>
        </div>
      </div>
    </div>
  )
}

export default Login