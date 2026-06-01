-- Enable pg_net for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

-- Trigger function: calls send-lead-email Edge Function
CREATE OR REPLACE FUNCTION public.notify_lead_email()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  PERFORM extensions.http_post(
    url := 'https://sgzhxgfspmsurrymcuvz.supabase.co/functions/v1/send-lead-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnemh4Z2ZzcG1zdXJyeW1jdXZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDEyNzIwNCwiZXhwIjoyMDk1NzAzMjA0fQ.BXhvqWkkGYk1-S2fvJKpLZAxWxkw8oGK8Q0aV-CIV50'
    ),
    body := jsonb_build_object('table', TG_TABLE_NAME, 'record', row_to_json(NEW)::jsonb)
  );
  RETURN NEW;
END;
$$;

-- Triggers on all 3 tables
CREATE OR REPLACE TRIGGER on_leads_insert
  AFTER INSERT ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.notify_lead_email();

CREATE OR REPLACE TRIGGER on_site_visits_insert
  AFTER INSERT ON public.site_visits
  FOR EACH ROW EXECUTE FUNCTION public.notify_lead_email();

CREATE OR REPLACE TRIGGER on_brochure_downloads_insert
  AFTER INSERT ON public.brochure_downloads
  FOR EACH ROW EXECUTE FUNCTION public.notify_lead_email();
