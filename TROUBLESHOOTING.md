# 🔧 Troubleshooting Guide - Tuğba's Recipe App

This guide helps you resolve common issues you might encounter while running the app.

---

## 🚨 Common Issues & Solutions

### 1. ❌ Error When Saving/Favoriting Recipes

**Problem:** When you click the bookmark/favorite icon, you get an error or nothing happens.

**Cause:** The backend server is not running or not accessible.

**Solution:**

1. Open a new terminal window
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
4. You should see:
   ```
   Server running on port 5001
   ```
5. Try favoriting the recipe again in the app

**Additional Checks:**
- Make sure port 5001 is not being used by another application
- Check if you have the `.env` file in the backend folder with `DATABASE_URL`
- Verify your database connection (Neon.tech PostgreSQL)

---

### 2. ❌ Error When Opening Recipe Details

**Problem:** App crashes or shows error when clicking on a recipe.

**Possible Causes & Solutions:**

#### A. Recipe Data Not Loading
**Solution:**
- Check your internet connection
- The app uses TheMealDB API which requires internet
- Wait a few seconds and try again

#### B. Recipe Data Incomplete
**Solution:**
- This is now handled gracefully - the app will show "Recipe not found"
- Click "Go Back" and try another recipe

---

### 3. ⚠️ Backend Connection Errors

**Problem:** "Failed to update favorites" or "Network request failed"

**Solutions:**

#### For Physical Device Testing:
1. Find your computer's IP address:
   - **Mac:** System Preferences → Network → Your IP (e.g., 192.168.1.5)
   - **Windows:** `ipconfig` in Command Prompt
   - **Linux:** `ifconfig` or `ip addr`

2. Update `mobile/constants/api.js`:
   ```javascript
   export const API_URL = "http://YOUR_IP_ADDRESS:5001/api";
   // Example: "http://192.168.1.5:5001/api"
   ```

3. Make sure your phone and computer are on the same WiFi network

#### For Emulator/Simulator:
- iOS Simulator: `http://localhost:5001/api` works fine
- Android Emulator: Use `http://10.0.2.2:5001/api`

---

### 4. 🔄 App Not Refreshing After Backend Starts

**Problem:** Started the backend but favorites still don't work.

**Solution:**
1. Close the Expo app completely on your device
2. In terminal, press `r` to reload the app
3. Or shake your device → "Reload"

---

### 5. 📱 Authentication Issues

**Problem:** Can't sign in or sign up.

**Solutions:**

#### A. Clerk Setup Issues
1. Make sure you have `.env` file in mobile folder
2. Verify `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
3. Get your key from [Clerk Dashboard](https://dashboard.clerk.com)

#### B. Email Verification Code Not Working
- Check your email (including spam folder)
- Code expires after 10 minutes - request a new one
- Make sure you're entering all 6 digits

---

### 6. 🎨 UI Issues After Updates

**Problem:** UI looks broken or icons don't show.

**Solution:**
1. Clear Expo cache:
   ```bash
   cd mobile
   npx expo start -c
   ```
2. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

---

### 7. 🗄️ Database Connection Issues

**Problem:** Backend starts but favorites don't save.

**Solutions:**

#### A. Check Database URL
1. Open `backend/.env`
2. Verify `DATABASE_URL` is correct
3. Format should be: `postgresql://user:password@host/database`

#### B. Run Migrations
```bash
cd backend
npm install
npx drizzle-kit push:pg
```

#### C. Test Database Connection
Try connecting to your database using a tool like:
- [Neon Console](https://console.neon.tech)
- pgAdmin
- DBeaver

---

## 🔍 Debugging Tips

### Check Backend Logs
When backend is running, watch the terminal for errors:
```bash
cd backend
npm run dev
# Watch for error messages
```

### Check Mobile App Logs
In Expo:
1. Shake device → "Debug Remote JS"
2. Open browser console (Chrome DevTools)
3. See errors in real-time

### Enable Verbose Logging
In `mobile/app/recipe/[id].jsx`, errors are already being logged to console.

---

## ✅ Quick Health Check

Run this checklist to ensure everything is set up:

- [ ] Backend server is running (`npm run dev` in backend folder)
- [ ] You see "Server running on port 5001" message
- [ ] Mobile app is running (`npx expo start` in mobile folder)
- [ ] You can see recipes on the home screen (internet connection OK)
- [ ] You're logged in (authentication working)
- [ ] `.env` files are configured in both folders

---

## 🆘 Still Having Issues?

### Debug Steps:

1. **Check Backend Health:**
   Open browser and visit: `http://localhost:5001/api`
   - Should see some response (not an error page)

2. **Test Favorites API:**
   ```bash
   curl http://localhost:5001/api/favorites/test_user_id
   ```
   - Should return JSON (even if empty array)

3. **Check Network:**
   Make sure no firewall is blocking port 5001

4. **Restart Everything:**
   ```bash
   # Stop both servers (Ctrl+C)
   # Then restart:
   
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Mobile
   cd mobile
   npx expo start -c
   ```

---

## 📝 Error Messages Explained

### "Recipe not found"
- The recipe ID doesn't exist in TheMealDB
- Or API request failed
- Solution: Try another recipe

### "Failed to update favorites"
- Backend is not running
- Database connection issue
- Solution: Check backend logs

### "Network request failed"
- No internet connection
- Backend server not accessible
- Wrong API URL in `constants/api.js`

### "You must be logged in"
- Authentication token expired
- Solution: Sign out and sign in again

---

## 💡 Pro Tips

1. **Always run backend before testing favorites**
2. **Keep terminal open** to see backend logs
3. **Use `console.log`** in code to debug issues
4. **Check React Native Debugger** for detailed errors
5. **Clear app data** if things get weird (uninstall and reinstall)

---

## 🎯 Expected Behavior

**When Everything Works:**
1. ✅ App loads and shows recipes
2. ✅ You can click on recipes and see details
3. ✅ Bookmark icon appears (when logged in)
4. ✅ Clicking bookmark saves recipe (backend running)
5. ✅ Favorites tab shows saved recipes
6. ✅ Can remove from favorites

**Without Backend:**
1. ✅ App loads and shows recipes
2. ✅ You can click on recipes and see details
3. ❌ Bookmark icon still appears
4. ❌ Clicking bookmark shows error (expected)
5. ❌ Favorites tab is empty

---

<p align="center">
  Need more help? Check the main README.md or CONTRIBUTING.md
</p>

<p align="center">
  <strong>Made with ❤️ by Tuğba Gündoğdu</strong>
</p>
