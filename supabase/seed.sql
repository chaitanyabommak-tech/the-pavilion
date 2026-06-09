-- Seed data for The Pavilion Admin Dashboard

-- Insert default CTA settings
INSERT INTO cta_settings (setting_key, setting_value, setting_type) VALUES
('primary_phone', '+91 9876543210', 'phone'),
('whatsapp_number', '+91 9876543210', 'phone'),
('whatsapp_message', 'Hi, I am interested in The Pavilion villa community. Please share more details.', 'text'),
('enquiry_email', 'info@bommakugroup.com', 'email'),
('book_site_visit_label', 'Book Site Visit', 'text'),
('enquire_now_label', 'Enquire Now', 'text'),
('brochure_url', '/brochure/the-pavilion-brochure.pdf', 'url'),
('google_maps_url', 'https://maps.app.goo.gl/R1nc9T4BruaWa8N57', 'url')
ON CONFLICT (setting_key) DO NOTHING;

-- Insert default tracking settings
INSERT INTO tracking_settings (setting_key, setting_value) VALUES
('ga4_measurement_id', 'G-QGJ61SEN5Y', true),
('gtm_id', 'GTM-KD57FLT8', true),
('google_ads_id', '', true),
('meta_pixel_id', '', false)
ON CONFLICT (setting_key) DO NOTHING;

-- Insert default villas (A1 must be Sold Out)
INSERT INTO villas (villa_id, block, plot_number, plot_size_sqyd, facing, built_up_area_sft, configuration, status, status_color, is_published) VALUES
('A1', 'A', 1, 183, 'East', 2750, '3BHK / 4BHK possible', 'Sold Out', '#DC2626', true),
('A2', 'A', 2, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('A3', 'A', 3, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('A4', 'A', 4, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('B1', 'B', 1, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('B2', 'B', 2, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('B3', 'B', 3, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('C1', 'C', 1, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('C2', 'C', 2, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('C3', 'C', 3, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('D1', 'D', 1, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('D2', 'D', 2, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('E1', 'E', 1, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('E2', 'E', 2, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('F1', 'F', 1, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('F2', 'F', 2, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('G1', 'G', 1, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('G2', 'G', 2, 183, 'East', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('H1', 'H', 1, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true),
('H2', 'H', 2, 183, 'West', 2750, '3BHK / 4BHK possible', 'Available', '#C5A572', true)
ON CONFLICT (villa_id) DO NOTHING;

-- Insert default website sections
INSERT INTO website_sections (section_key, title, eyebrow, headline, subheadline, body_copy, is_published) VALUES
('clean_slate', 'The Clean Slate', 'The Clean Slate', 'Designed For You, By You', 'A villa community where your home is not forced into a cookie-cutter layout', 'At The Pavilion, we believe a home should reflect the people who live in it. The Clean Slate is our buyer-personalization approach, where the structural framework remains strong, while the internal planning and lifestyle choices are shaped around your vision.', true),
('recreation_zone', 'Bommaku Recreation Zone', 'Bommaku Recreation Zone', 'Premium Lifestyle Amenities', 'Experience world-class recreational facilities', 'The Bommaku Recreation Zone offers villa owners and public members access to premium wellness, sports, aquatic lifestyle, and family facilities designed for modern living.', true),
('east_facing', 'East Facing Villas', 'East Facing', 'East Facing Villa Facades', 'Premium morning light and architectural excellence', 'East Facing villas at The Pavilion offer optimal morning sunlight, refined elevation detailing, and personalized interior planning through our Clean Slate process.', true),
('west_facing', 'West Facing Villas', 'West Facing', 'West Facing Villa Facades', 'Bold facade expression and strong architectural presence', 'West Facing villas feature distinct architectural character, premium exterior proportions, and flexible interior customization opportunities.', true)
ON CONFLICT (section_key) DO NOTHING;

-- Insert default SEO pages
INSERT INTO seo_pages (page_key, page_title, meta_description, canonical_url, is_published) VALUES
('home', 'The Pavilion - Premium Villas in Boduppal by Bommaku Group', 'Discover The Pavilion, a premium villa community in Boduppal by Bommaku Group. 3BHK & 4BHK independent villas with Clean Slate customization, recreation zone, and RERA approved.', 'https://bommakugroup.com', true),
('floor_plans', 'Floor Plans - The Pavilion Villas Boduppal', 'Explore customizable 3BHK and 4BHK villa floor plans at The Pavilion. East and West facing options with premium living spaces.', 'https://bommakugroup.com#floor-plans', true),
('recreation_zone', 'Bommaku Recreation Zone - Premium Amenities', 'World-class recreation facilities including wellness, sports, aquatic lifestyle, and family amenities at The Pavilion villa community.', 'https://bommakugroup.com#recreation-zone', true),
('location', 'Location - The Pavilion Boduppal', 'The Pavilion is strategically located in Boduppal with excellent connectivity to Uppal, LB Nagar, and major IT corridors.', 'https://bommakugroup.com#location', true)
ON CONFLICT (page_key) DO NOTHING;
