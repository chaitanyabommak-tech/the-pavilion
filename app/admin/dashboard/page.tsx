import { createClient } from '@/lib/supabase/server'
import { Toaster } from 'react-hot-toast'
import AuthCheck from '@/components/admin/AuthCheck'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch stats
  const [
    { count: totalLeads },
    { count: newLeads },
    { count: availableVillas },
    { count: soldVillas },
    { count: totalMedia },
    { count: galleryItems },
  ] = await Promise.all([
    supabase.from('leads').select('*', { count: 'exact', head: true }),
    supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'New'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Available'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Sold Out'),
    supabase.from('media_assets').select('*', { count: 'exact', head: true }),
    supabase.from('gallery_items').select('*', { count: 'exact', head: true }).eq('is_published', true),
  ])

  // Fetch recent leads
  const { data: recentLeads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  // Fetch recent activity from audit logs
  const { data: recentActivity } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  const stats = [
    { label: 'Total Leads', value: totalLeads || 0, icon: '👥', color: 'bg-blue-500' },
    { label: 'New Leads', value: newLeads || 0, icon: '✨', color: 'bg-green-500' },
    { label: 'Available Villas', value: availableVillas || 0, icon: '🏘️', color: 'bg-purple-500' },
    { label: 'Sold Villas', value: soldVillas || 0, icon: '✅', color: 'bg-red-500' },
    { label: 'Media Files', value: totalMedia || 0, icon: '🖼️', color: 'bg-yellow-500' },
    { label: 'Gallery Slides', value: galleryItems || 0, icon: '🎨', color: 'bg-pink-500' },
  ]

  return (
    <AuthCheck>
      <div>
        <Toaster position="top-right" />

        {/* Header */}
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome to The Pavilion Admin Dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

      {/* Recent Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Leads</h2>
          {recentLeads && recentLeads.length > 0 ? (
            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-start justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <p className="text-sm text-gray-600">{lead.phone}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {lead.preferred_villa && `Villa: ${lead.preferred_villa}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        lead.status === 'New'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {lead.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No leads yet</p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          {recentActivity && recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-600 truncate">
                      {activity.entity_type} {activity.entity_id && `· ${activity.entity_id}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No recent activity</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/admin/media"
            className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <span className="text-3xl mb-2">🖼️</span>
            <span className="text-sm font-medium text-gray-900">Upload Media</span>
          </a>
          <a
            href="/admin/gallery"
            className="flex flex-col items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
          >
            <span className="text-3xl mb-2">🎨</span>
            <span className="text-sm font-medium text-gray-900">Edit Gallery</span>
          </a>
          <a
            href="/admin/villas"
            className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <span className="text-3xl mb-2">🏘️</span>
            <span className="text-sm font-medium text-gray-900">Manage Villas</span>
          </a>
          <a
            href="/admin/leads"
            className="flex flex-col items-center justify-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
          >
            <span className="text-3xl mb-2">👥</span>
            <span className="text-sm font-medium text-gray-900">View Leads</span>
          </a>
        </div>
      </div>
      </div>
    </AuthCheck>
  )
}
