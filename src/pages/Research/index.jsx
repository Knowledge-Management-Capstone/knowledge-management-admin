import DashboardLayout from '~/layouts/DashboardLayout'
import ResearchTable from './components/ResearchTable'

const Research = () => {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Penelitian</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ResearchTable />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Research
