# Versuzo - GoDaddy Domain Connection Guide

## Overview
This guide walks through connecting your `versuzo.in` domain (registered with GoDaddy) to your Vercel-deployed Versuzo application.

**Timeline:** 30 minutes for setup + 24-48 hours for DNS propagation  
**Cost:** No additional cost (included with domain registration)

---

## Prerequisites

Before starting, ensure you have:
1. ✅ Frontend deployed to Vercel (get deployment URL)
2. ✅ Backend deployed to Vercel (get deployment URL)
3. ✅ GoDaddy domain `versuzo.in` registered
4. ✅ GoDaddy account access
5. ✅ Vercel project access

---

## Step 1: Get Your Vercel Deployment URLs

### Frontend URL
1. Log in to Vercel: https://vercel.com
2. Select "Versuzo" frontend project
3. Go to **Deployments** tab
4. Copy the URL (e.g., `https://versuzo.vercel.app`)
5. Note this as `FRONTEND_URL`

### Backend URL
1. In Vercel, select "Versuzo API" backend project
2. Go to **Deployments** tab
3. Copy the URL (e.g., `https://versuzo-api.vercel.app`)
4. Note this as `BACKEND_URL`

---

## Step 2: Connect Frontend to Root Domain in Vercel

### In Vercel Dashboard
1. Open Vercel → Frontend Project
2. Go to **Settings** → **Domains**
3. Click **"Add Domain"** button
4. Enter: `versuzo.in`
5. Select verification method (choose "Nameserver")
6. Vercel will show verification instructions
7. **Note:** You'll update GoDaddy with these nameservers in Step 3

### Vercel's Display
You should see:
```
Domain: versuzo.in
Status: Pending verification
Nameservers:
  - ns1.vercel-dns.com
  - ns2.vercel-dns.com
  - ns3.vercel-dns.com
  - ns4.vercel-dns.com
```

---

## Step 3: Update GoDaddy Nameservers

### Log in to GoDaddy
1. Go to https://godaddy.com
2. Click **"Sign In"** (top right)
3. Enter your GoDaddy credentials
4. Go to **My Products**
5. Find **"versuzo.in"**
6. Click on it to open domain settings

### Update Nameservers
1. In domain settings, look for **"Nameservers"** section
2. Click **"Change"** or **"Edit"**
3. Select **"I'll use custom nameservers"**
4. Replace all nameservers with Vercel's:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```
5. Remove GoDaddy's default nameservers
6. Click **"Save"** or **"Update"**

### DNS Propagation
- Changes are typically effective within **1-2 hours**
- Full propagation across all DNS servers: **24-48 hours**
- You can check status at: https://mxtoolbox.com/MXLookup.aspx (enter `versuzo.in`)

**⚠️ Important:** Don't worry if sites say "Not Found" immediately. This is normal during propagation. Wait 1-2 hours before testing.

---

## Step 4: Verify Domain in Vercel

After 1-2 hours, go back to Vercel and check verification status.

### If Domain Verification Succeeds
1. Vercel dashboard shows: ✅ `versuzo.in` verified
2. Domain is ready to use
3. HTTPS is auto-enabled (certificate from Let's Encrypt)

### If Domain Verification Fails
1. Wait another hour (DNS caching)
2. Try clicking **"Verify Again"**
3. If still fails, verify GoDaddy nameservers were correctly saved
   - Check GoDaddy dashboard again
   - Ensure all 4 Vercel nameservers are listed
   - No GoDaddy nameservers should remain

---

## Step 5: Update Frontend Environment Variables

Once domain is verified, configure the frontend to use production domain.

### In Vercel (Frontend Project)
1. Go to **Settings** → **Environment Variables**
2. Update or create: `NEXT_PUBLIC_SITE_URL`
   ```
   NEXT_PUBLIC_SITE_URL = https://versuzo.in
   ```
3. Verify `NEXT_PUBLIC_API_URL` is set:
   ```
   NEXT_PUBLIC_API_URL = https://versuzo-api.vercel.app
   ```
4. Click **"Save"**
5. Redeploy frontend (trigger new build)
   - Go to **Deployments**
   - Click the **"..."** menu on latest deployment
   - Select **"Redeploy"**

### Verify Deployment
- After redeploy completes, visit: https://versuzo.in
- Should load your frontend
- Check browser console (F12) for any errors

---

## Step 6: Configure Backend (Optional - Advanced)

By default, backend uses Vercel's subdomain: `versuzo-api.vercel.app`

If you want a custom domain for backend: `api.versuzo.in`

### In Vercel (Backend Project)
1. Go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `api.versuzo.in`
4. Select **"Nameserver"** verification (same as frontend)

### In GoDaddy
1. Go to domain settings: https://godaddy.com/products/domains
2. Click **"DNS"** or **"Manage DNS"**
3. Look for **"Records"** or **"DNS Records"** section
4. Click **"Add"** or **"Create New Record"**
5. Create CNAME record:
   ```
   Type: CNAME
   Name: api
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
6. Click **"Save"**

### Wait for Propagation
- Backend custom domain ready in 1-2 hours
- Update frontend's `NEXT_PUBLIC_API_URL` to: `https://api.versuzo.in`
- Redeploy frontend

---

## Step 7: Update Backend Environment Variables

### In Vercel (Backend Project)
1. Go to **Settings** → **Environment Variables**
2. Update: `CORS_ORIGIN`
   ```
   CORS_ORIGIN = https://versuzo.in
   ```
3. Update: `FRONTEND_URL`
   ```
   FRONTEND_URL = https://versuzo.in
   ```
4. Click **"Save"**
5. Redeploy backend (trigger new build)
   - Go to **Deployments**
   - Click **"..."** menu on latest deployment
   - Select **"Redeploy"**

### Verify Backend
After redeploy completes:
```bash
# Test health check
curl https://versuzo-api.vercel.app/api/v1/health
# Should return: {"success": true, "message": "API is running"}

# Or if using custom domain:
curl https://api.versuzo.in/api/v1/health
```

---

## Step 8: Configure Email & SSL (Optional)

### SSL/HTTPS
- ✅ Automatically enabled by Vercel
- All traffic to `versuzo.in` uses HTTPS
- Certificates auto-renewed

### Email Configuration (Optional)
If you want to send emails from your domain, configure MX records:

#### Option A: Use GoDaddy Email Hosting
1. In GoDaddy domain settings
2. Look for **"Email"** or **"MX Records"**
3. GoDaddy will guide you through setup

#### Option B: Use Third-Party Email Service
Follow your email provider's MX record setup (SendGrid, AWS SES, etc.)

---

## Step 9: Final Testing

### Test Frontend
```
1. Open https://versuzo.in in browser
2. Should load your landing page
3. Open DevTools (F12) → Console
4. Should see no CORS errors
5. Click "Register" and create test account
6. Should be able to login
```

### Test Backend
```
1. Health check: 
   curl https://versuzo-api.vercel.app/api/v1/health
   Response: {"success":true,"message":"API is running"}

2. Registration:
   curl -X POST https://versuzo-api.vercel.app/api/v1/auth/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","password":"password123"}'

3. Check no CORS errors in response
```

### Test Domain Propagation
```bash
# Check that domain resolves to Vercel
nslookup versuzo.in
# Should show Vercel's IP: 76.76.19.89 (or similar)

# Check nameservers
nslookup -type=NS versuzo.in
# Should show: ns1.vercel-dns.com, ns2.vercel-dns.com, etc.
```

---

## DNS Records Summary

After all steps, your GoDaddy DNS should look like this:

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | @ | 76.76.19.89 | 3600 | Root domain → Vercel |
| CNAME | www | cname.vercel-dns.com | 3600 | www subdomain → Vercel |
| CNAME | api | cname.vercel-dns.com | 3600 | Backend subdomain (optional) |

**Note:** The IP `76.76.19.89` is Vercel's anycast IP. Verify current IP in Vercel dashboard if different.

---

## Troubleshooting

### Domain Shows "Not Found" or Blank Page

**Cause:** DNS propagation in progress  
**Fix:**
1. Wait 1-2 hours
2. Clear browser cache (Ctrl+Shift+Del)
3. Try different browser
4. Check GoDaddy dashboard - nameservers saved?
5. Verify in Vercel - domain shows green checkmark?

### "Failed to connect to API" in browser console

**Cause:** Frontend can't reach backend  
**Fix:**
1. Verify `NEXT_PUBLIC_API_URL` is set correctly
2. Check backend URL is accessible: `curl https://versuzo-api.vercel.app/api/v1/health`
3. Verify backend `CORS_ORIGIN` includes `https://versuzo.in`
4. Redeploy both frontend and backend

### "Certificate validation failed"

**Cause:** SSL certificate mismatch (rare)  
**Fix:**
1. Wait 30 minutes (Let's Encrypt propagation)
2. Clear browser cache
3. Try in incognito/private mode
4. Check Vercel shows domain as verified

### GoDaddy DNS Not Updating

**Cause:** Old DNS cached  
**Fix:**
1. Flush local DNS cache:
   ```bash
   # Windows
   ipconfig /flushdns
   ```
2. Try different DNS server to check:
   ```bash
   nslookup versuzo.in 8.8.8.8
   ```

### Getting "502 Bad Gateway" Error

**Cause:** Backend unreachable or misconfigured  
**Fix:**
1. Check backend deployed successfully to Vercel
2. Verify health check works: `curl https://versuzo-api.vercel.app/api/v1/health`
3. Check backend logs in Vercel for errors
4. Verify environment variables set in Vercel
5. Redeploy backend

---

## Timeline Checklist

| Step | Time | Status |
|------|------|--------|
| Deploy to Vercel | Now | ⏱️ |
| Get deployment URLs | +5 min | ⏱️ |
| Add domain in Vercel | +5 min | ⏱️ |
| Update GoDaddy nameservers | +5 min | ⏱️ |
| Wait for DNS propagation | +60-120 min | ⏳ |
| Verify domain in Vercel | +120 min | ⏱️ |
| Update env vars and redeploy | +125 min | ⏱️ |
| Final testing | +135 min | ✅ |

**Total:** ~2-3 hours (including propagation wait)

---

## Support Resources

| Resource | Link |
|----------|------|
| Vercel Domains Help | https://vercel.com/docs/projects/domains |
| GoDaddy Domain Help | https://www.godaddy.com/help |
| DNS Propagation Checker | https://www.whatsmydns.net |
| MX Record Checker | https://mxtoolbox.com |
| SSL Certificate Status | https://www.ssllabs.com/ssltest |

---

## Next Steps After Domain Connection

1. ✅ Monitor uptime
2. ✅ Set up error tracking (Sentry, LogRocket)
3. ✅ Configure analytics
4. ✅ Set up email backup (in case SMTP fails)
5. ✅ Implement monitoring for API health
6. ✅ Schedule database backups
7. ✅ Document domain renewal date (usually 1 year)

---

**Domain Setup Complete!** 🎉

Your Versuzo application is now live at **https://versuzo.in**

For additional configuration help, see:
- [DEPLOYMENT_READINESS_REPORT.md](./DEPLOYMENT_READINESS_REPORT.md) - Comprehensive deployment guide
- [DEPLOYMENT_QUICK_REFERENCE.md](./DEPLOYMENT_QUICK_REFERENCE.md) - Quick reference
