# 📧 Email Configuration Guide for RevissaWay

## Setup Instructions

### 1. Create Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Click **"Select app"** → Choose **"Mail"**
5. Click **"Select device"** → Choose **"Other"** → Type "RevissaWay Website"
6. Click **Generate**
7. Copy the 16-character password (example: `abcd efgh ijkl mnop`)

### 2. Create .env.local File

Create a file named `.env.local` in the project root with:

```bash
# Gmail Configuration
GMAIL_USER=revissaway@gmail.com
GMAIL_PASS=your-16-char-app-password-here
```

**IMPORTANT**: 
- Remove spaces from the app password
- Never commit `.env.local` to git (already in .gitignore)
- This file stays local only

### 3. Configure Vercel Environment Variables

For production deployment:

1. Go to https://vercel.com/dashboard
2. Select your **RevissaWay** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - Name: `GMAIL_USER` → Value: `revissaway@gmail.com`
   - Name: `GMAIL_PASS` → Value: `your-app-password-here`
5. Click **Save**
6. Redeploy the project

### 4. Test Locally

```bash
npm run dev
```

Go to: http://localhost:3000/#contact

Fill out the form and submit. Check `revissaway@gmail.com` inbox!

### 5. API Endpoint

**URL**: `/api/contact`
**Method**: `POST`
**Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+61 123 456 789",
  "service": "Hair Transplant",
  "preferredDate": "2025-01-20",
  "message": "I'm interested in hair transplant"
}
```

## Email Template Features

✅ Professional HTML template with RevissaWay branding
✅ Gold color scheme (#9B7E3E)
✅ Responsive design
✅ Includes all form fields
✅ Timestamp in Australian timezone
✅ Clean, readable format

## Troubleshooting

### Error: "Invalid login"
- Check that 2-Step Verification is enabled
- Regenerate App Password
- Make sure you're using App Password, not regular Gmail password

### Error: "ECONNREFUSED"
- Check internet connection
- Verify Gmail SMTP is not blocked by firewall

### Emails not arriving
- Check spam folder in revissaway@gmail.com
- Verify environment variables are set correctly
- Check Vercel logs for errors

## Security Notes

🔒 **Never commit .env.local to git**
🔒 **Use App Passwords only (not your main Gmail password)**
🔒 **Rotate passwords regularly**
🔒 **Enable 2FA on Gmail account**

## Alternative: Use Formspree (Current Setup)

The project currently uses Formspree. If you prefer to keep using it:
- Current endpoint: `https://formspree.io/f/maypkdzz`
- No additional setup required
- Already working in homepage

To switch from Formspree to Nodemailer, update the form action in:
- `app/page.tsx` (homepage contact form)
- Any other forms

Change:
```js
fetch("https://formspree.io/f/maypkdzz", ...)
```

To:
```js
fetch("/api/contact", ...)
```

---

**Created**: January 2025
**For**: RevissaWay.com.au
**Contact**: revissaway@gmail.com

