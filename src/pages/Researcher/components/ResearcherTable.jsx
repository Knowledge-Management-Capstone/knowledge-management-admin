import { Fragment, useState } from 'react'
import clsx from 'clsx'
import { CheckIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import BaseTableItem from '~/components/generic/table/BaseTableItem'
import BaseTable from '~/components/generic/table/BaseTable'
import ResearcherEditModal from './ResearcherEditModal'

const header = ['Name', 'Email', 'Role', 'Major', 'Status', 'Actions']
const researcher = [
  {
    _id: 1,
    fullName: 'Dian Rahmaji',
    email: 'dianrahmaji@gmail.com',
    accountType: 'student',
    major: 'Information Engineering',
    isApproved: true
  }
]

import { fullName, email, accountType, major } from '~/utils/validation'

const ResearcherTable = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedResearcher, setSelectedResearcher] = useState(null)

  const handleApprove = () => {}
  const handleEdit = r => {
    setSelectedResearcher(r)
    setOpenDialog(true)
  }
  const handleDelete = () => {}

  return (
    <Fragment>
      <BaseTable header={header}>
        {researcher &&
          researcher.map(r => (
            <tr key={r._id}>
              <BaseTableItem className="font-medium text-gray-900">
                {r.fullName}
              </BaseTableItem>
              <BaseTableItem>{r.email}</BaseTableItem>
              <BaseTableItem>{r.accountType}</BaseTableItem>
              <BaseTableItem>{r.major}</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-green-100 text-green-800': r.isApproved,
                      'bg-red-100 text-red-800': !r.isApproved
                    }
                  )}
                >
                  {r.isApproved ? 'active' : 'inactive'}
                </span>
              </BaseTableItem>
              <BaseTableItem className="relative flex gap-2">
                {!r.isApproved && (
                  <CheckIcon
                    className="h-6 w-6 text-green-500 hover:cursor-pointer hover:text-green-700 hover:bg-black hover:bg-opacity-10"
                    onClick={() => handleApprove(r._id)}
                  />
                )}
                <PencilAltIcon
                  className="h-6 w-6 text-blue-500 hover:cursor-pointer hover:text-blue-700 hover:bg-black hover:bg-opacity-10"
                  onClick={() => handleEdit(r)}
                />
                <TrashIcon
                  className="h-6 w-6 text-red-500 hover:cursor-pointer hover:text-red-700 hover:bg-black hover:bg-opacity-10"
                  onClick={() => handleDelete(r._id)}
                />
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
      <ResearcherEditModal
        open={openDialog}
        setOpen={setOpenDialog}
        validation={{ fullName, email, accountType, major }}
        initialValues={selectedResearcher}
      />
    </Fragment>
  )
}

export default ResearcherTable
