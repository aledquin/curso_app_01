# Meta + Instagram setup guide (step-by-step)

This setup is required for official Instagram publishing access.

## 1) Prepare account type

1. Create or log into Instagram account.
2. Convert to **Business** or **Creator** account in Instagram settings.
3. Create or choose a Facebook Page and link the Instagram account to it.

## 2) Create Meta app

1. Visit [Meta for Developers](https://developers.facebook.com/).
2. Create a new app (Business type is typically preferred).
3. Add products:
   - Facebook Login
   - Instagram Graph API

## 3) Configure OAuth

1. Add redirect URI for backend callback:
   - Example: `https://api.example.com/v1/auth/instagram/callback`
2. Configure app domain and privacy policy URL.
3. Enable strict mode for redirect URI validation.

## 4) Request permissions/scopes

Start with only needed scopes (exact set may vary by account/project):

- `instagram_basic`
- `instagram_content_publish`
- `pages_show_list`
- `pages_read_engagement`

## 5) Test in development mode

1. Add test users/roles in Meta app.
2. Authorize your app with those users.
3. Perform dry-run publishing pipeline first.

## 6) Go live

1. Complete Data Use Checkup.
2. Submit app review for required permissions.
3. Switch app mode to Live after approval.

## Notes

- Avoid unofficial automation endpoints.
- Store and refresh tokens securely.
- Add retry with idempotency keys to prevent duplicate publishes.
