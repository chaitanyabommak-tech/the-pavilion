# 🔧 Fix Signup - Add Missing Environment Variable

## Issue: "Supabase key is required"

The signup page needs the `SUPABASE_SERVICE_ROLE_KEY` environment variable in Vercel.

---

## ✅ SOLUTION: Add Environment Variable to Vercel

### Step 1: Go to Vercel Dashboard
```
https://vercel.com/chaitanyabommak-techs-projects/the-pavilion/settings/environment-variables
```

### Step 2: Add the Missing Variable

Click **"Add New"** and enter:

**Name:**
```
SUPABASE_SERVICE_ROLE_KEY
```

**Value:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnemh4Z2ZzcG1zdXJyeW1jdXZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDEyNzIwNCwiZXhwIjoyMDk1NzAzMjA0fQ.i1Roqmxh0Sum_c9iyiDZFg_tXWEFSGE
```

**Environments:** Check all three:
- ✅ Production
- ✅ Preview  
- ✅ Development

### Step 3: Click "Save"

### Step 4: Redeploy

Vercel will automatically redeploy after adding the environment variable.

Wait 2-3 minutes for deployment to complete.

---

## ✅ After Adding Variable:

### Try Signup Again:

1. **Visit:** https://bommakugroup.com/admin/signup

2. **Fill in:**
   - Full Name: Your name
   - Email: Your email
   - Password: Your password (min 6 chars)

3. **Click:** "Create Admin Account"

4. **Should work!** ✅

---

## 🔄 Alternative: Use Existing Account

If you don't want to wait for Vercel deployment:

### Login with existing account:
```
URL: https://bommakugroup.com/admin/login
Email: admin@bommakugroup.com
Password: Admin@123456
```

---

## 📋 Quick Check

To verify the variable is set:

1. Go to: https://vercel.com/chaitanyabommak-techs-projects/the-pavilion/settings/environment-variables

2. You should see:
   - ✅ NEXT_PUBLIC_SUPABASE_URL
   - ✅ NEXT_PUBLIC_SUPABASE_ANON_KEY
   - ✅ SUPABASE_SERVICE_ROLE_KEY (add this one!)

---

## ⚠️ Important Notes:

**Security:**
- Keep SUPABASE_SERVICE_ROLE_KEY secret
- Never commit it to GitHub (it's in .gitignore)
- Only add it to Vercel environment variables

**After Adding:**
- Vercel will auto-deploy
- Wait 2-3 minutes
- Then signup will work

---

## 🎯 Summary:

**Problem:** Signup needs service role key  
**Solution:** Add SUPABASE_SERVICE_ROLE_KEY to Vercel  
**Where:** https://vercel.com/chaitanyabommak-techs-projects/the-pavilion/settings/environment-variables  
**Value:** (See above)  
**Then:** Wait for deployment, try signup again ✅

---

**Or use existing login:**  
https://bommakugroup.com/admin/login  
Email: admin@bommakugroup.com  
Password: Admin@123456
