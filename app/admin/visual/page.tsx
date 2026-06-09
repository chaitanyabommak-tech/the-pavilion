import { createClient } from '@/lib/supabase/server'
import VisualEditor from '@/components/admin/VisualEditor'
import { Toaster } from 'react-hot-toast'

export default async function VisualAdminPage() {
  const supabase = await createClient()

  // Fetch ALL website data
  const [
    { data: galleryItems },
    { data: villas },
    { data: sections },
    { data: ctaSettings },
  ] = await Promise.all([
    supabase.from('gallery_items').select('*').order('display_order'),
    supabase.from('villas').select('*').order('villa_id'),
    supabase.from('website_sections').select('*'),
    supabase.from('cta_settings').select('*'),
  ])

  // Transform sections into key-value pairs
  const sectionsData = sections?.reduce((acc, section) => {
    acc[section.section_key] = section
    return acc
  }, {} as any) || {}

  // Transform CTA settings
  const ctaData = ctaSettings?.reduce((acc, setting) => {
    acc[setting.setting_key] = setting.setting_value
    return acc
  }, {} as any) || {}

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster position="top-right" />

      {/* Top Bar */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-white">Visual Website Editor</h1>
            <span className="text-sm text-gray-400">bommakugroup.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/admin/open"
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to Dashboard
            </a>
            <a
              href="https://bommakugroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg"
            >
              View Live Site ↗
            </a>
          </div>
        </div>
      </div>

      {/* Visual Editor */}
      <VisualEditor
        galleryItems={galleryItems || []}
        villas={villas || []}
        sections={sectionsData}
        ctaSettings={ctaData}
      />
    </div>
  )
}
