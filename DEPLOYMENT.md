# Deployment Checklist

## ✅ Before Deploying to Production

### 1. Environment Configuration
- [ ] `.env.production` contains correct Heroku URL
- [ ] `.env.development` contains localhost URL
- [ ] `api-helper.js` uses environment-aware configuration

### 2. Build Process
```bash
# For development
npm start

# For production build
npm run build
```

### 3. Heroku Deployment
Your Heroku app: `https://floating-cove-34332.herokuapp.com/`

**Current Status:**
- ✅ Frontend configured for both environments
- ✅ Development: `http://localhost:3000/`
- ✅ Production: `https://floating-cove-34332.herokuapp.com/`

### 4. Testing Checklist
- [ ] Test locally: Both Rails (3000) and React (3001) running
- [ ] Test API endpoint: `curl http://localhost:3000/songs`
- [ ] Test production API: `curl https://floating-cove-34332.herokuapp.com/songs`
- [ ] Verify environment variables in browser console

### 5. Heroku App Status
Check if your Heroku app is still active:
```bash
curl https://floating-cove-34332.herokuapp.com/songs
```

If it returns 404 or error, you may need to:
1. Redeploy to Heroku
2. Check Heroku database status
3. Verify Heroku dyno is running

## 🚨 IMPORTANT
Never commit API URLs as hardcoded strings! Always use environment variables.
