'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface SEOPage {
  id: string
  page_path: string
  page_title: string
  meta_description: string
  canonical_url: string | null
  og_title: string | null
  og_description: string | null
  og_image: string | null
  twitter_image: string | null
  robots: string
}

interface SEOClientProps {
  initialPages: SEOPage[]
}

export default function SEOClient({ initialPages }: SEOClientProps) {
  const [pages, setPages] = useState<SEOPage[]>(initialPages)
  const [editingPage, setEditingPage] = useState<SEOPage | null>(null)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const handleUpdate = async (pageId: string, updates: Partial<SEOPage>) => {
    setSaving(true)
    try {
      const supabase = createClient()

      const { error } = await supabase
        .from('seo_pages')
        .update(updates)
        .eq('id', pageId)

      if (error) throw error

      toast.success('SEO settings saved!')
      setEditingPage(null)
      router.refresh()
      setPages(pages.map(p => p.id === pageId ? { ...p, ...updates } : p))
    } catch (error: any) {
      toast.error(error.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Pages List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Page
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Meta Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pages.map((page) => (
              <tr key={page.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {page.page_path}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {page.page_title || '-'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                  {page.meta_description || '-'}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => setEditingPage(page)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                  >
                    Edit SEO
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No SEO pages found</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingPage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              Edit SEO: {editingPage.page_path}
            </h3>

            <div className="space-y-4">
              {/* Page Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Page Title (appears in browser tab)
                </label>
                <input
                  type="text"
                  value={editingPage.page_title || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, page_title: e.target.value })}
                  placeholder="The Pavilion - Luxury Villas by Bommaku Group"
                  maxLength={60}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {editingPage.page_title?.length || 0}/60 characters
                </p>
              </div>

              {/* Meta Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description (appears in search results)
                </label>
                <textarea
                  value={editingPage.meta_description || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, meta_description: e.target.value })}
                  placeholder="Premium gated villa community in Boduppal, Hyderabad..."
                  maxLength={160}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {editingPage.meta_description?.length || 0}/160 characters
                </p>
              </div>

              {/* Canonical URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Canonical URL
                </label>
                <input
                  type="url"
                  value={editingPage.canonical_url || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, canonical_url: e.target.value })}
                  placeholder="https://bommakugroup.com/"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* OG Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open Graph Title (for social media)
                </label>
                <input
                  type="text"
                  value={editingPage.og_title || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, og_title: e.target.value })}
                  placeholder="The Pavilion - Premium Villa Community"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* OG Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open Graph Description
                </label>
                <textarea
                  value={editingPage.og_description || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, og_description: e.target.value })}
                  placeholder="Discover luxury living at The Pavilion..."
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* OG Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open Graph Image URL
                </label>
                <input
                  type="url"
                  value={editingPage.og_image || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, og_image: e.target.value })}
                  placeholder="https://bommakugroup.com/og-image.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Twitter Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter Image URL
                </label>
                <input
                  type="url"
                  value={editingPage.twitter_image || ''}
                  onChange={(e) => setEditingPage({ ...editingPage, twitter_image: e.target.value })}
                  placeholder="https://bommakugroup.com/twitter-image.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Robots */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Robots Directive
                </label>
                <select
                  value={editingPage.robots || 'index,follow'}
                  onChange={(e) => setEditingPage({ ...editingPage, robots: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="index,follow">Index, Follow (Default)</option>
                  <option value="noindex,follow">No Index, Follow</option>
                  <option value="index,nofollow">Index, No Follow</option>
                  <option value="noindex,nofollow">No Index, No Follow</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => handleUpdate(editingPage.id, {
                    page_title: editingPage.page_title,
                    meta_description: editingPage.meta_description,
                    canonical_url: editingPage.canonical_url,
                    og_title: editingPage.og_title,
                    og_description: editingPage.og_description,
                    og_image: editingPage.og_image,
                    twitter_image: editingPage.twitter_image,
                    robots: editingPage.robots
                  })}
                  disabled={saving}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white ${
                    saving ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {saving ? 'Saving...' : 'Save SEO Settings'}
                </button>
                <button
                  onClick={() => setEditingPage(null)}
                  className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
