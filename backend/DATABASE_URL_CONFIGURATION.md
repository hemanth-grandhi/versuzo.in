# Production Deployment Configuration Guide

## URGENT: Fix Postgres Connection Error

### Current Issue
```
Error: Postgres connection failed: getaddrinfo ENOTFOUND base
```

This error indicates that DATABASE_URL is either:
1. **Malformed** - Contains incomplete or invalid hostname
2. **Not set** - Missing in Vercel environment variables
3. **Truncated** - Partially copied/configured
4. **Using placeholder** - Contains default or example value

---

## Step 1: Verify DATABASE_URL Format

DATABASE_URL **MUST** follow this exact format:

```
postgresql://USERNAME:PASSWORD@HOSTNAME:PORT/DATABASE_NAME
```

### ✅ CORRECT Examples:
- `postgresql://user:pass123@db.example.com:5432/mydb`
- `postgres://admin:secure_pwd@postgres.railway.app:5432/production`
- `postgresql://versuzo_user:p@ss%40word@neon.tech:5432/versuzo_db`

### ❌ INCORRECT Examples (Will fail):
- `postgres://base` ← **Currently causing the error**
- `postgresql://base:password` ← Missing host after `base`
- `base` ← Just hostname, not a valid URL
- `postgresql://` ← Missing all components
- `postgresql://host/db` ← Missing credentials and port

---

## Step 2: Identify Your PostgreSQL Provider

Choose one (or verify which you're already using):

| Provider | Connection String Format | Notes |
|----------|------------------------|-------|
| **Vercel Postgres** | `postgresql://user:pass@db.vercel-storage.com:5432/db` | Included with Vercel |
| **Neon** | `postgresql://user:pass@neon.tech:5432/db?sslmode=require` | Free tier available |
| **Supabase** | `postgresql://postgres:pass@db.supabase.co:5432/postgres` | Free tier available |
| **AWS RDS** | `postgresql://master:pass@mydb.c9akciq32.us-east-1.rds.amazonaws.com:5432/mydb` | Regional endpoint |
| **DigitalOcean** | `postgresql://user:pass@db-postgresql-xxx.db.ondigitalocean.com:25060/mydb` | 25060 is custom port |
| **Render** | `postgresql://user:pass@dpg-xxx.render.com:5432/mydb` | Auto-generated |

---

## Step 3: Configure in Vercel

1. **Go to Vercel Dashboard**
   - Select your backend project
   - Navigate to **Settings** → **Environment Variables**

2. **Add DATABASE_URL Variable:**
   - **Key:** `DATABASE_URL`
   - **Value:** `postgresql://user:password@host:port/database` (from Step 2)
   - **Environments:** Select all (Development, Preview, Production)

3. **Critical Environment Variables Required:**
   ```
   DATABASE_URL=postgresql://...  (CRITICAL)
   JWT_SECRET=<32+ char random>   (CRITICAL)
   NODE_ENV=production            (CRITICAL)
   PORT=3000                       (CRITICAL - Vercel default)
   CORS_ORIGIN=https://versuzo.in (CRITICAL)
   FRONTEND_URL=https://versuzo.in (CRITICAL)
   ```

4. **Redeploy Backend**
   ```bash
   git push (or trigger redeploy from Vercel dashboard)
   ```

---

## Step 4: Verify Configuration

### Check 1: DATABASE_URL Format
```bash
# From terminal (not in production):
node -e "
const url = new URL(process.env.DATABASE_URL);
console.log('✓ Valid format');
console.log('  Host:', url.hostname);
console.log('  Port:', url.port);
console.log('  Database:', url.pathname);
"
```

### Check 2: Test Connection
```bash
# Install postgres client (optional)
# psql CONNECTION_STRING
# Should return: psql (version X.X)
```

### Check 3: Health Endpoint (After Deployment)
```bash
# GET https://<backend-url>/api/v1/health
# Should return:
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2024-...",
    "service": "versuzo-api",
    "database": {
      "status": "connected"  ← Must show "connected"
    }
  }
}
```

### Check 4: Diagnostic Endpoint (Development Only)
```bash
# GET http://localhost:4000/api/v1/health/diagnostic
# Shows environment variable status and DATABASE_URL parsing
```

---

## Step 5: Common Issues & Solutions

### Issue 1: "ENOTFOUND base"
**Cause:** DATABASE_URL is set to `postgres://base` or incomplete  
**Solution:** Ensure full connection string is set, not just hostname

### Issue 2: "Connection refused"
**Cause:** PostgreSQL server not running or wrong port  
**Solution:** Verify database server is running and port is correct

### Issue 3: "Authentication failed"
**Cause:** Wrong username/password in DATABASE_URL  
**Solution:** Double-check credentials - special characters need URL encoding

### Issue 4: "Certificate not found"
**Cause:** SSL/TLS issue with remote database  
**Solution:** Add `?sslmode=require` to connection string

### Issue 5: "Database does not exist"
**Cause:** Database name in URL doesn't exist  
**Solution:** Create the database first or use correct name

---

## Step 6: Environment Variable Checklist

Before deploying, ensure ALL of these are set in Vercel:

- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `JWT_SECRET` - Generated 32+ character random string
- [ ] `NODE_ENV` - Set to `production`
- [ ] `PORT` - Set to `3000`
- [ ] `CORS_ORIGIN` - Your frontend URL (e.g., `https://versuzo.in`)
- [ ] `FRONTEND_URL` - Your frontend URL (e.g., `https://versuzo.in`)

Optional but recommended:
- [ ] `SEED_ADMIN_EMAIL` - Admin account email
- [ ] `SEED_ADMIN_PASSWORD` - Admin account password
- [ ] `SMTP_HOST` - Email service host
- [ ] `SMTP_USER` - Email service user
- [ ] `SMTP_PASS` - Email service password

---

## Step 7: Verify After Deployment

1. **Check Vercel Build Logs**
   - Look for: `✓ DATABASE_URL validation passed`
   - Look for: `✓ Successfully connected to Postgres database`

2. **Check Runtime Logs**
   - Verify no `ENOTFOUND` or `ECONNREFUSED` errors
   - Should see database table creation messages

3. **Test Endpoints**
   ```bash
   # Health check
   GET /api/v1/health
   
   # Create test user (if auth is working)
   POST /api/v1/auth/register
   
   # Should NOT see: "getaddrinfo ENOTFOUND" errors
   ```

---

## Step 8: Generate JWT_SECRET

If not already done:

```bash
# macOS/Linux/Windows (PowerShell)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Example output:
# a3f5b8c9d2e1f4g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1
```

Add this to Vercel: `JWT_SECRET=<output-from-above>`

---

## Quick Reference: DATABASE_URL by Provider

### Vercel Postgres
1. Open Vercel project
2. Storage → Create Database → Postgres
3. Copy connection string starting with `postgresql://`

### Neon
1. Create project at neon.tech
2. Copy connection string from dashboard
3. Append `?sslmode=require` if SSL errors occur

### Supabase
1. Create project at supabase.com
2. Go to Settings → Database
3. Copy connection string (PostgreSQL)

### Railway
1. Create PostgreSQL plugin
2. Connection string visible in plugin info

---

## Deployment Checklist

- [ ] DATABASE_URL is complete and valid
- [ ] DATABASE_URL is set in Vercel (all environments)
- [ ] JWT_SECRET is set (32+ characters)
- [ ] NODE_ENV is set to `production`
- [ ] CORS_ORIGIN is set to frontend URL
- [ ] FRONTEND_URL is set to frontend URL
- [ ] Backend code updated with this configuration
- [ ] Backend redeployed after environment changes
- [ ] Health endpoint returns database status: "connected"
- [ ] No ENOTFOUND or ECONNREFUSED errors in logs

---

**After completing these steps, run production verification tests.**
