import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import { CheckIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import { approveResearcher } from '../../../store/actions/researcherActions'

const UserTableItem = ({ researcher }) => {
  const dispatch = useDispatch()

  const handleApprove = researcherId => {
    dispatch(approveResearcher(researcherId))
  }
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <tr key={researcher.email}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {researcher.fullName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {researcher.email}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {researcher.accountType}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {researcher.major}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <span
          className={clsx(
            'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
            {
              'bg-green-100 text-green-800': researcher.isApproved,
              'bg-red-100 text-red-800': !researcher.isApproved
            }
          )}
        >
          {researcher.isApproved ? 'active' : 'inactive'}
        </span>
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6  flex gap-2">
        {!researcher.isApproved && (
          <CheckIcon
            className="h-6 w-6 text-green-500 hover:cursor-pointer hover:text-green-700 hover:bg-black hover:bg-opacity-10"
            onClick={() => handleApprove(researcher._id)}
          />
        )}
        <PencilAltIcon
          className="h-6 w-6 text-blue-500 hover:cursor-pointer hover:text-blue-700 hover:bg-black hover:bg-opacity-10"
          onClick={handleEdit}
        />
        <TrashIcon
          className="h-6 w-6 text-red-500 hover:cursor-pointer hover:text-red-700 hover:bg-black hover:bg-opacity-10"
          onClick={handleDelete}
        />
      </td>
    </tr>
  )
}

export default UserTableItem
