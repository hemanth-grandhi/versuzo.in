# URGENT: Quick Fix - Postgres Connection Error

## Error
```
Postgres connection failed: getaddrinfo ENOTFOUND base
```

## Root Cause
DATABASE_URL environment variable is not properly configured in Vercel.

## Fix (5 Minutes)

### Step 1: Get Your Database Connection String

Choose ONE:

**🟢 Vercel Postgres (Easiest)**
- Go to Vercel Dashboard → Storage → Create Database
- Copy the PostgreSQL connection string

**🟢 Neon (Fastest Free Tier)**
- Go to neon.tech → Sign up
- Create project → Copy connection string
- Format: `postgresql://user:password@neon.tech:5432/database?sslmode=require`

**🟢 Supabase (Most Features)**
- Go to supabase.com → Create project
- Go to Database → Connection
- Copy the PostgreSQL connection string

**🟢 AWS RDS / Railway / DigitalOcean**
- Get connection string: `postgresql://user:password@host:port/database`

### Step 2: Configure Vercel

1. Open https://vercel.com → Select "versuzo" project → Settings
2. Go to Environment Variables
3. Add these 6 variables for **Production** environment:

```
DATABASE_URL = postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET = abcdef123456789abcdef123456789abcdef (at least 32 characters)
NODE_ENV = production
PORT = 3000
CORS_ORIGIN = https://versuzo.in
FRONTEND_URL = https://versuzo.in
```

⚠️ Make sure to set these for **Production** environment specifically.

### Step 3: Redeploy

1. Go to Vercel Dashboard → Deployments
2. Find latest deployment or click "Redeploy"
3. Wait for deployment to complete

### Step 4: Verify (30 Seconds)

Go to https://your-backend-url/api/v1/health

**✅ Should return:**
```json
{
  "success": true,
  "data": {
    "status": "ok",
    "database": {
      "status": "connected"
    }
  }
}
```

If database status shows "error", get more info:
https://your-backend-url/api/v1/health/diagnostic

---

## Common Mistakes ❌

| ❌ Wrong | ✅ Correct |
|---------|----------|
| `base` | `postgresql://user:pass@host:5432/db` |
| `postgres://base` | `postgresql://user:pass@host:5432/db` |
| `host:5432/db` | `postgresql://user:pass@host:5432/db` |
| `postgresql://` | `postgresql://user:pass@host:5432/db` |
| Empty value | `postgresql://user:pass@host:5432/db` |

---

## Verify Each Step

- [ ] DATABASE_URL retrieved from provider
- [ ] All 6 variables added to Vercel → Production environment
- [ ] Backend redeployed
- [ ] `/api/v1/health` returns status: "ok"
- [ ] `/api/v1/health` shows database status: "connected"

---

## If Still Not Working

1. **Check DATABASE_URL format:**
   ```
   Must be exactly: postgresql://USERNAME:PASSWORD@HOSTNAME:PORT/DATABASE
   ```

2. **Test in Diagnostic Endpoint:**
   ```
   GET https://your-backend-url/api/v1/health/diagnostic
   
   Look for:
   - databaseUrl.exists: true
   - databaseUrl.hasValidProtocol: true
   - databaseUrl.parsed.hostname: (not "base")
   ```

3. **Check Vercel Logs:**
   - Deployments → Select deployment → Logs
   - Look for: "Successfully connected" or error message

4. **Common Issues:**
   - Wrong hostname → Verify provider's connection string
   - Wrong port → Use provider's recommended port
   - Special characters in password → URL encode them (%40 for @, %23 for #, etc.)
   - Firewall blocking → Check database provider's IP whitelist
   - Database not running → Verify provider's service is active

---

## Expected Outcome

After these 5 steps:

- ✅ No more "ENOTFOUND base" errors
- ✅ Backend connects to PostgreSQL
- ✅ /api/v1/health returns connected
- ✅ Users can create accounts
- ✅ Production is stable

**Questions?** Check [PRODUCTION_FIX_REPORT.md](./PRODUCTION_FIX_REPORT.md) for detailed troubleshooting.
