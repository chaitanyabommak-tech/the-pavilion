import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function FloorPlansPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Floor Plans Manager</h1>
          <p className="text-gray-600">
            Upload and manage floor plan images (Coming soon)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Floor Plans Manager</h2>
          <p className="text-gray-600 mb-6">
            This module is under development. Currently, floor plans are managed through the villa inventory.
          </p>
          <a
            href="/admin/cms/villas"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Go to Villa Inventory
          </a>
        </div>
      </div>
    </div>
  )
}
