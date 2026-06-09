import { createClient } from '@/lib/supabase/server'
import { Toaster } from 'react-hot-toast'

// NO AUTHENTICATION - DIRECT ACCESS
export default async function OpenAdminDashboard() {
  const supabase = await createClient()

  // Fetch stats WITHOUT auth check
  const [
    { count: totalLeads },
    { count: newLeads },
    { count: availableVillas },
    { count: soldVillas },
  ] = await Promise.all([
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'New'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Available'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Sold Out'),
  ])

  const stats = [
    { label: 'Total Leads', value: totalLeads || 0, icon: '👥', color: 'bg-blue-500' },
    { label: 'New Leads', value: newLeads || 0, icon: '✨', color: 'bg-green-500' },
    { label: 'Available Villas', value: availableVillas || 0, icon: '🏘️', color: 'bg-purple-500' },
    { label: 'Sold Villas', value: soldVillas || 0, icon: '✅', color: 'bg-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />

      {/* Simple Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">The Pavilion - Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Direct Access (No Login Required)</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/admin/open/gallery"
              className="flex flex-col items-center justify-center p-6 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
            >
              <span className="text-4xl mb-2">🎨</span>
              <span className="text-sm font-medium text-gray-900">Gallery Manager</span>
            </a>
            <a
              href="/admin/open/villas"
              className="flex flex-col items-center justify-center p-6 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center"
            >
              <span className="text-4xl mb-2">🏘️</span>
              <span className="text-sm font-medium text-gray-900">Manage Villas</span>
            </a>
            <a
              href="/admin/open/leads"
              className="flex flex-col items-center justify-center p-6 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-center"
            >
              <span className="text-4xl mb-2">👥</span>
              <span className="text-sm font-medium text-gray-900">View Leads</span>
            </a>
            <a
              href="/admin/open/media"
              className="flex flex-col items-center justify-center p-6 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center"
            >
              <span className="text-4xl mb-2">🖼️</span>
              <span className="text-sm font-medium text-gray-900">Media Library</span>
            </a>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <span className="text-3xl mr-4">✅</span>
            <div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Admin Dashboard Active!</h3>
              <p className="text-green-800">
                You have direct access to the admin dashboard without login.
                Bookmark this URL: <code className="bg-green-100 px-2 py-1 rounded">/admin/open</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
