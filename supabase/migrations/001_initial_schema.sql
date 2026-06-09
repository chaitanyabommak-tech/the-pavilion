-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Admin Users Table (extends Supabase auth.users)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL CHECK (role IN ('super_admin', 'editor', 'viewer')),
  full_name TEXT,
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Media Assets Table
CREATE TABLE media_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  alt_text TEXT,
  caption TEXT,
  category TEXT CHECK (category IN (
    'hero', 'gallery', 'grand_entrance', 'recreation_zone',
    'east_facing_exteriors', 'west_facing_exteriors', 'interiors',
    'floor_plans', 'master_plan', 'location', 'brochure', 'logos', 'misc'
  )),
  is_active BOOLEAN DEFAULT true,
  uploaded_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery Items Table
CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  caption TEXT NOT NULL,
  image_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  thumbnail_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  alt_text TEXT NOT NULL,
  category TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES admin_users(id),
  updated_by UUID REFERENCES admin_users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Villas Table
CREATE TABLE villas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  villa_id TEXT NOT NULL UNIQUE, -- e.g., A1, B3
  block TEXT NOT NULL, -- A, B, C, etc.
  plot_number INTEGER NOT NULL,
  plot_size_sqyd NUMERIC(10,2) NOT NULL,
  facing TEXT CHECK (facing IN ('East', 'West', 'North East', 'North West', 'North', 'South')),
  built_up_area_sft NUMERIC(10,2),
  configuration TEXT, -- e.g., 3BHK, 4BHK possible
  floor_plan_id UUID,
  status TEXT NOT NULL CHECK (status IN ('Available', 'Reserved', 'Sold Out', 'Hold')),
  status_color TEXT NOT NULL,
  price NUMERIC(12,2),
  price_visibility TEXT CHECK (price_visibility IN ('public', 'hidden')) DEFAULT 'hidden',
  notes TEXT,
  public_description TEXT,
  is_visible BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  updated_by UUID REFERENCES admin_users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Floor Plans Table
CREATE TABLE floor_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  floor_plan_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  facing TEXT,
  plot_size_sqyd NUMERIC(10,2),
  built_up_area_sft NUMERIC(10,2),
  ground_floor_sft NUMERIC(10,2),
  first_floor_sft NUMERIC(10,2),
  penthouse_sft NUMERIC(10,2),
  configuration TEXT,
  image_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  thumbnail_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  is_active BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  created_by UUID REFERENCES admin_users(id),
  updated_by UUID REFERENCES admin_users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add foreign key to villas table for floor_plan_id
ALTER TABLE villas ADD CONSTRAINT fk_villas_floor_plan
  FOREIGN KEY (floor_plan_id) REFERENCES floor_plans(id) ON DELETE SET NULL;

-- Website Sections Table
CREATE TABLE website_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_key TEXT NOT NULL UNIQUE,
  title TEXT,
  eyebrow TEXT,
  headline TEXT,
  subheadline TEXT,
  body_copy TEXT,
  cta_label TEXT,
  cta_url TEXT,
  image_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  is_visible BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  metadata JSONB,
  updated_by UUID REFERENCES admin_users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads Table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_villa TEXT,
  enquiry_type TEXT CHECK (enquiry_type IN (
    'general_enquiry', 'site_visit', 'villa_enquiry',
    'similar_villa', 'brochure_download', 'callback_request'
  )),
  budget TEXT,
  message TEXT,
  preferred_site_visit_date DATE,
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  page_url TEXT,
  status TEXT DEFAULT 'New' CHECK (status IN (
    'New', 'Contacted', 'Site Visit Scheduled', 'Visited',
    'Interested', 'Negotiation', 'Closed Won', 'Closed Lost', 'Junk'
  )),
  assigned_to UUID REFERENCES admin_users(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO Pages Table
CREATE TABLE seo_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_key TEXT NOT NULL UNIQUE,
  page_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  canonical_url TEXT,
  og_title TEXT,
  og_description TEXT,
  og_image_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  twitter_card_image_id UUID REFERENCES media_assets(id) ON DELETE SET NULL,
  keywords TEXT,
  is_indexed BOOLEAN DEFAULT true,
  is_published BOOLEAN DEFAULT false,
  updated_by UUID REFERENCES admin_users(id),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- CTA Settings Table
CREATE TABLE cta_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT NOT NULL,
  setting_type TEXT CHECK (setting_type IN ('phone', 'email', 'url', 'text')),
  is_active BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tracking Settings Table
CREATE TABLE tracking_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES admin_users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit Log Table
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  old_value JSONB,
  new_value JSONB,
  user_id UUID REFERENCES admin_users(id),
  user_email TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_media_category ON media_assets(category);
CREATE INDEX idx_media_active ON media_assets(is_active);
CREATE INDEX idx_gallery_order ON gallery_items(display_order);
CREATE INDEX idx_gallery_active ON gallery_items(is_active, is_published);
CREATE INDEX idx_villas_status ON villas(status);
CREATE INDEX idx_villas_block ON villas(block);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created ON leads(created_at DESC);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at DESC);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE villas ENABLE ROW LEVEL SECURITY;
ALTER TABLE floor_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE cta_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE tracking_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Admin Users
CREATE POLICY "Admin users can view all admin users"
  ON admin_users FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "Super admins can manage admin users"
  ON admin_users FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE role = 'super_admin' AND is_active = true));

-- RLS Policies for Media Assets
CREATE POLICY "Anyone can view active media"
  ON media_assets FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage media"
  ON media_assets FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Gallery Items
CREATE POLICY "Anyone can view published gallery items"
  ON gallery_items FOR SELECT
  USING (is_published = true AND is_active = true);

CREATE POLICY "Admins can manage gallery items"
  ON gallery_items FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Villas
CREATE POLICY "Anyone can view published villas"
  ON villas FOR SELECT
  USING (is_published = true AND is_visible = true);

CREATE POLICY "Admins can manage villas"
  ON villas FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Floor Plans
CREATE POLICY "Anyone can view published floor plans"
  ON floor_plans FOR SELECT
  USING (is_published = true AND is_active = true);

CREATE POLICY "Admins can manage floor plans"
  ON floor_plans FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Website Sections
CREATE POLICY "Anyone can view published sections"
  ON website_sections FOR SELECT
  USING (is_published = true AND is_visible = true);

CREATE POLICY "Admins can manage sections"
  ON website_sections FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Leads
CREATE POLICY "Public can insert leads"
  ON leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
  ON leads FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "Admins can update leads"
  ON leads FOR UPDATE
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for SEO Pages
CREATE POLICY "Anyone can view published SEO pages"
  ON seo_pages FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage SEO pages"
  ON seo_pages FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for CTA Settings
CREATE POLICY "Anyone can view active CTA settings"
  ON cta_settings FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage CTA settings"
  ON cta_settings FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Tracking Settings
CREATE POLICY "Anyone can view active tracking settings"
  ON tracking_settings FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage tracking settings"
  ON tracking_settings FOR ALL
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

-- RLS Policies for Audit Logs
CREATE POLICY "Admins can view audit logs"
  ON audit_logs FOR SELECT
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));

CREATE POLICY "System can insert audit logs"
  ON audit_logs FOR INSERT
  WITH CHECK (true);

-- Functions
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_media_assets_updated_at BEFORE UPDATE ON media_assets FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_gallery_items_updated_at BEFORE UPDATE ON gallery_items FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_villas_updated_at BEFORE UPDATE ON villas FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_floor_plans_updated_at BEFORE UPDATE ON floor_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_website_sections_updated_at BEFORE UPDATE ON website_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_seo_pages_updated_at BEFORE UPDATE ON seo_pages FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_cta_settings_updated_at BEFORE UPDATE ON cta_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_tracking_settings_updated_at BEFORE UPDATE ON tracking_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
