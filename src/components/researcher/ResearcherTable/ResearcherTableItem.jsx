import { CheckIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

const UserTableItem = ({ person }) => {
  const handleApprove = () => {}
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <tr key={person.email}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {person.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.title}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.email}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.role}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6  flex gap-2">
        <CheckIcon
          className="h-6 w-6 text-green-500 hover:cursor-pointer hover:text-green-700 hover:bg-black hover:bg-opacity-10"
          onClick={handleApprove}
        />
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
