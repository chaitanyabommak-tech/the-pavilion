import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function CMSOverviewPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Get REAL data
  const [
    { count: galleryCount },
    { count: villaCount },
    { count: availableVillas },
    { count: soldVillas },
    { count: reservedVillas },
    { data: sections },
  ] = await Promise.all([
    supabase.from('gallery_items').select('*', { count: 'exact', head: true }).eq('is_active', true),
    supabase.from('villas').select('*', { count: 'exact', head: true }),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Available'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Sold Out'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'Reserved'),
    supabase.from('website_sections').select('*'),
  ])

  const stats = [
    { label: 'Gallery Images', value: galleryCount || 0, icon: '🎨', href: '/admin/cms/gallery' },
    { label: 'Total Villas', value: villaCount || 0, icon: '🏘️', href: '/admin/cms/villas' },
    { label: 'Available', value: availableVillas || 0, icon: '✅', href: '/admin/cms/villas?status=available', color: 'text-green-600' },
    { label: 'Sold Out', value: soldVillas || 0, icon: '🔴', href: '/admin/cms/villas?status=sold', color: 'text-red-600' },
    { label: 'Reserved', value: reservedVillas || 0, icon: '🟡', href: '/admin/cms/villas?status=reserved', color: 'text-yellow-600' },
    { label: 'Website Sections', value: sections?.length || 0, icon: '📄', href: '/admin/cms/sections' },
  ]

  const cmsModules = [
    { name: 'Media Library', desc: 'Upload, replace, and manage all website images', icon: '📁', href: '/admin/cms/media', color: 'bg-blue-500' },
    { name: 'Gallery Manager', desc: 'Edit gallery carousel images and order', icon: '🎨', href: '/admin/cms/gallery', color: 'bg-purple-500' },
    { name: 'Villa Inventory', desc: 'Manage villa data, status, and floor plans', icon: '🏘️', href: '/admin/cms/villas', color: 'bg-green-500' },
    { name: 'Section Editor', desc: 'Edit website text and content sections', icon: '📝', href: '/admin/cms/sections', color: 'bg-yellow-500' },
    { name: 'Recreation Zone', desc: 'Manage amenities and features', icon: '🏊', href: '/admin/cms/recreation-zone', color: 'bg-cyan-500' },
    { name: 'Clean Slate', desc: 'Edit customization process steps', icon: '✏️', href: '/admin/cms/clean-slate', color: 'bg-teal-500' },
    { name: 'East Facing', desc: 'Manage East Facing section and images', icon: '🌅', href: '/admin/cms/east-facing', color: 'bg-orange-500' },
    { name: 'West Facing', desc: 'Manage West Facing section and images', icon: '🌆', href: '/admin/cms/west-facing', color: 'bg-pink-500' },
    { name: 'CTA Settings', desc: 'Update phone, WhatsApp, and CTAs', icon: '📞', href: '/admin/cms/cta', color: 'bg-red-500' },
    { name: 'SEO Manager', desc: 'Manage meta tags and SEO settings', icon: '🔍', href: '/admin/cms/seo', color: 'bg-indigo-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management System</h1>
          <p className="text-gray-600">Manage all website content for bommakugroup.com</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color || 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* CMS Modules */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CMS Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cmsModules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0`}>
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-4">
          <Link
            href="/admin/crm"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold"
          >
            Go to CRM →
          </Link>
          <Link
            href="/"
            target="_blank"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold"
          >
            View Live Website ↗
          </Link>
        </div>
      </div>
    </div>
  )
}
