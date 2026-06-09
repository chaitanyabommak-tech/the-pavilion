# 🚀 Deploy Admin Dashboard to bommakugroup.com

## ✅ Code is Ready - Now Deploy to Vercel!

Your admin dashboard code is complete and pushed to GitHub. Now we need to deploy it to Vercel so it controls **bommakugroup.com**.

---

## 🎯 What Will Happen:

After deployment:
- **Live Website:** https://bommakugroup.com
- **Admin Dashboard:** https://bommakugroup.com/admin/open
- **Both use the same Supabase database**
- **Changes in admin appear on live site instantly!**

---

## 📋 Deployment Steps:

### Step 1: Add Environment Variables to Vercel

1. **Go to Vercel Dashboard:**
   ```
   https://vercel.com/chaitanyabommak-techs-projects/the-pavilion/settings/environment-variables
   ```

2. **Add these 3 variables:**

   **Variable 1:**
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://sgzhxgfspmsurrymcuvz.supabase.co`
   - Environment: Production, Preview, Development (all three)

   **Variable 2:**
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnemh4Z2ZzcG1zdXJyeW1jdXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMjcyMDQsImV4cCI6MjA5NTcwMzIwNH0.5NsFpK2xYd-4rHgmCkgKjR_QnZmaoNhGbB370-BRdNs`
   - Environment: Production, Preview, Development

   **Variable 3:**
   - Name: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: Get from Supabase → Settings → API → service_role (secret key)
   - Environment: Production, Preview, Development
   - ⚠️ **IMPORTANT:** This is secret - never share publicly!

3. **Click "Save"** after each variable

### Step 2: Redeploy

1. **Go to Vercel Deployments:**
   ```
   https://vercel.com/chaitanyabommak-techs-projects/the-pavilion
   ```

2. **Click "Redeploy"** (or it may auto-deploy from GitHub push)

3. **Wait 2-3 minutes** for deployment to complete

4. **Deployment will succeed** ✅

### Step 3: Setup Gallery on Live Site

1. **Visit:**
   ```
   https://bommakugroup.com/admin/open/setup-gallery
   ```

2. **Click "Setup Gallery Now"**

3. **Wait for success message**

4. **Done!** Gallery is now database-driven on live site

### Step 4: Test Admin Controls Live Site

1. **Visit Admin:**
   ```
   https://bommakugroup.com/admin/open/gallery
   ```

2. **Edit first image caption**

3. **Save changes**

4. **Visit Live Site:**
   ```
   https://bommakugroup.com
   ```

5. **See updated caption in gallery!** ✅

---

## ✅ After Deployment You Can:

### From Anywhere in the World:

1. **Visit:** https://bommakugroup.com/admin/open

2. **Change villa status** (A1 to Sold Out, B3 to Reserved, etc.)

3. **Edit gallery** (captions, order, images)

4. **View leads** (from contact forms)

5. **All changes appear** on https://bommakugroup.com **instantly!**

---

## 🔐 Security (IMPORTANT):

### Current Setup:
- `/admin/open` has **NO PASSWORD** (for development)
- Anyone can access it

### Before Going Live:

**Option 1: Add IP Restriction**
In Vercel, restrict `/admin/open` to your IP address only

**Option 2: Use Authenticated Admin**
- Use `/admin` instead (has login)
- Create your account at `/admin/signup`
- Login required

**Option 3: Remove Open Admin**
- Delete `/admin/open` routes
- Only use `/admin` with authentication

**For now:** Open admin is fine for testing, but add security before announcing!

---

## 📊 What's Deployed:

### Live Website Features:
✅ Homepage with database-driven gallery
✅ Contact forms saving leads to database
✅ Villa configurations
✅ Master plan
✅ All existing content

### Admin Dashboard Features:
✅ Gallery management
✅ Villa status management
✅ Lead management
✅ No login required (for now)

---

## 🎯 Quick Test Checklist:

After deployment, test these:

- [ ] Visit https://bommakugroup.com (should load normally)
- [ ] Scroll to gallery (should show 9 images)
- [ ] Visit https://bommakugroup.com/admin/open (should load dashboard)
- [ ] Visit https://bommakugroup.com/admin/open/setup-gallery
- [ ] Click "Setup Gallery Now"
- [ ] Edit a gallery item in admin
- [ ] Refresh homepage - see the change!
- [ ] Change villa B3 to "Reserved" in admin
- [ ] Check master plan (coming soon)

---

## 🔄 Deployment Flow:

```
1. Make changes in admin
   ↓
2. Changes save to Supabase database
   ↓
3. Live website loads from Supabase
   ↓
4. Changes appear on bommakugroup.com instantly!
```

---

## ⚠️ Troubleshooting:

### "Environment variables not found"
- Make sure you added all 3 variables in Vercel
- Make sure you selected all 3 environments (Production, Preview, Development)
- Redeploy after adding variables

### "Gallery is empty"
- Visit `/admin/open/setup-gallery` on the live site
- Click "Setup Gallery Now"
- Refresh homepage

### "Admin pages not loading"
- Check Vercel deployment logs
- Make sure latest code is deployed
- Check browser console for errors

---

## 📞 Support:

If deployment fails:
1. Check Vercel deployment logs
2. Check environment variables are correct
3. Make sure Supabase project is active
4. Check browser console for errors

---

## 🎉 Success Criteria:

You'll know it's working when:

1. ✅ https://bommakugroup.com loads normally
2. ✅ https://bommakugroup.com/admin/open shows admin dashboard
3. ✅ You can edit gallery caption in admin
4. ✅ Changes appear on live website immediately
5. ✅ You can change villa statuses
6. ✅ You can view leads from contact forms

---

**🚀 START DEPLOYMENT NOW:**

1. Add environment variables to Vercel
2. Wait for deployment
3. Visit https://bommakugroup.com/admin/open/setup-gallery
4. Test admin controls live site!

**Your admin dashboard will control bommakugroup.com!** 🎯
