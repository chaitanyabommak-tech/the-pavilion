import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import CleanSlateEditorClient from '@/components/admin/CleanSlateEditorClient'

export default async function CleanSlateEditorPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Fetch all clean slate steps
  const { data: steps } = await supabase
    .from('clean_slate_steps')
    .select('*')
    .order('display_order', { ascending: true })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Clean Slate Editor</h1>
          <p className="text-gray-600">
            Manage the customization process steps. Changes appear on bommakugroup.com.
          </p>
        </div>

        <CleanSlateEditorClient initialSteps={steps || []} />
      </div>
    </div>
  )
}
