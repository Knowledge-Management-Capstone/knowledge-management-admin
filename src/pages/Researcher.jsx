import DashboardLayout from '../layouts/DashboardLayout'
import UserTable from '../components/common/UserTable/UserTable'

const Researcher = () => {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Peneliti</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <UserTable />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Researcher
