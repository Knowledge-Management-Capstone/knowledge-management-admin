import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import BaseInput from '../components/generic/form/input/BaseInput'
import BaseCheckbox from '../components/generic/form/input/BaseCheckbox'
import BaseButton from '../components/generic/button/BaseButton'

import { login } from '../store/actions/userActions'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.userLogin)

  useEffect(() => {
    if (user) navigate('/', { replace: true })
  }, [user, navigate])

  const handleSubmit = (values, { setSubmitting }) => {
    const { email, password } = values
    dispatch(login(email, password))
    setSubmitting(false)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <Formik
              initialValues={{
                email: '',
                password: '',
                remember: false
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string().required('Required')
              })}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-6">
                <BaseInput label="Email" name="email" type="email" />
                <BaseInput label="Password" name="password" type="password" />
                <div className="flex items-center justify-between">
                  <BaseCheckbox label="Remember me" name="remember" />

                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <BaseButton type="submit">Sign in</BaseButton>
              </Form>
            </Formik>

            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login