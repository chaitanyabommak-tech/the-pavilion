# GET SUPABASE SERVICE ROLE KEY

The service role key in your `.env.local` appears to be incorrect or incomplete.

## Steps to Get the Correct Key:

1. **Go to Supabase Dashboard:**
   - Visit: https://supabase.com/dashboard
   - Login to your account

2. **Select Your Project:**
   - Click on your project: `sgzhxgfspmsurrymcuvz`

3. **Go to Settings:**
   - Click the ⚙️ Settings icon (bottom left sidebar)
   - Click **"API"** in the settings menu

4. **Copy the Service Role Key:**
   - Scroll down to "Project API keys"
   - Find **"service_role"** key (NOT the anon key)
   - Click the eye icon to reveal it
   - Click copy
   - It should start with: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long JWT token)

5. **The correct key format:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnemh4Z2ZzcG1zdXJyeW1jdXZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDEyNzIwNCwiZXhwIjoyMDk1NzAzMjA0fQ.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
   (Should be about 200+ characters long, NOT the short `sb_secret_...` format)

---

## After You Get the Key:

**Option A - I'll Add It For You:**
Just paste the key here and I'll add it to Vercel.

**Option B - Add It Yourself:**
```bash
cd the-pavilion
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# Paste the key when prompted
vercel --prod
```

---

**The key you currently have (`sb_secret_i1Roqmxh0Sum_c9iyiDZFg_tXWEFSGE`) is NOT the correct service_role key format.**
