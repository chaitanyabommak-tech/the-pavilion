# 🔐 Admin Login Credentials

## Login URL
```
https://bommakugroup.com/admin/login
```

---

## Admin Accounts

### Account 1: Primary Admin
**Email:** `admin@bommakugroup.com`  
**Password:** `Admin@123456`  
**Role:** Super Admin  
**Status:** Active ✅

### Account 2: Group Admin
**Email:** `groupbommaku@gmail.com`  
**Password:** (Password you created during signup)  
**Role:** Super Admin  
**Status:** Active ✅

---

## Quick Access Links

### Main Dashboard
```
https://bommakugroup.com/admin/cms
```

### Media Library (Upload Images)
```
https://bommakugroup.com/admin/cms/media
```

### Gallery Manager (Replace Images)
```
https://bommakugroup.com/admin/cms/gallery
```

### Villa Inventory (Manage Villas)
```
https://bommakugroup.com/admin/cms/villas
```

### Section Editor (Edit Website Text)
```
https://bommakugroup.com/admin/cms/sections
```

### CRM (View Leads)
```
https://bommakugroup.com/admin/crm
```

---

## First Time Login

1. **Visit:** https://bommakugroup.com/admin/login
2. **Enter Email:** `admin@bommakugroup.com`
3. **Enter Password:** `Admin@123456`
4. **Click:** "Sign In"
5. **You'll be redirected to:** `/admin/cms` (Dashboard)

---

## What You Can Do

### ✅ Upload Images
1. Go to: `/admin/cms/media`
2. Select category
3. Click "Choose File"
4. Upload image → Saves to cloud

### ✅ Replace Gallery Images
1. Go to: `/admin/cms/gallery`
2. Find image (e.g., "Grand Entrance")
3. Click "Replace Image"
4. Select new image
5. Changes appear on live site immediately!

### ✅ Edit Website Text
1. Go to: `/admin/cms/sections`
2. Select section (Hero, Clean Slate, etc.)
3. Click "Edit Content"
4. Change headline, body, CTAs
5. Click "Save Changes"
6. Changes save to database

### ✅ Manage Villa Status
1. Go to: `/admin/cms/villas`
2. Find villa (e.g., "B3")
3. Click status button (Available/Sold/Reserved)
4. Status updates in database

### ✅ View Customer Leads
1. Go to: `/admin/crm`
2. See all leads from contact forms
3. Update status, add notes
4. Manage customer pipeline

---

## Password Reset (If Needed)

If you need to reset the password for `admin@bommakugroup.com`:

1. Use Supabase Dashboard:
   - Go to: https://supabase.com/dashboard
   - Select project
   - Go to Authentication → Users
   - Find user → Reset password

2. Or contact me to run a password reset script

---

## Security Notes

⚠️ **Important:**
- Keep credentials secure
- Don't share publicly
- Change default password if needed
- Use strong passwords for production

🔒 **Current Security:**
- All admin routes protected
- Middleware checks authentication
- Session-based login
- RLS enabled on database

---

## Troubleshooting

### "Invalid login credentials"
- Check email spelling
- Check password (case-sensitive)
- Try the other admin account

### "You do not have admin access"
- Account exists in auth but not in admin_users table
- Contact me to add to admin_users

### Can't access admin pages
- Make sure you're logged in
- Check middleware is working
- Clear browser cookies and try again

---

## Support

**Documentation:**
- INTEGRATION-COMPLETE.md - Full system guide
- DELIVERY-REPORT.md - Complete documentation
- FINAL-CMS-CRM-STATUS.md - System status

**Need Help?**
- Check documentation first
- Review error in browser console
- Check Supabase logs

---

## Quick Test

**Test if login works:**

1. Open: https://bommakugroup.com/admin/login
2. Login with: admin@bommakugroup.com / Admin@123456
3. Should redirect to: /admin/cms
4. You should see: Dashboard with stats
5. Success! ✅

---

**Login Link:** https://bommakugroup.com/admin/login

**Primary Credentials:**
- Email: admin@bommakugroup.com
- Password: Admin@123456

**Status: Ready to Use** ✅
