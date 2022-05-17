const UserTableItem = ({ person }) => {
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
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        Edit<span className="sr-only">, {person.name}</span>
      </td>
    </tr>
  )
}

export default UserTableItem
