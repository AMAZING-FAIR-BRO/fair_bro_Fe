Google Sign-In integration (Expo)

1. Install required package:

```bash
expo install expo-auth-session expo-web-browser
```

2. Configure OAuth client IDs (Google Cloud Console). Add these to your environment or `app.json` as secure values:

- `EXPO_GOOGLE_CLIENT_ID` (for Expo Go)
- `ANDROID_GOOGLE_CLIENT_ID`
- `IOS_GOOGLE_CLIENT_ID`
- `WEB_GOOGLE_CLIENT_ID`

3. For local testing without client IDs, the app will fallback to a demo payload when the auth request is not configured.

4. Backend: accept `POST /auth/google` with `{ id_token }`, verify the token with Google, then return `{ access_token, user }`.

5. Run app:

```bash
npm run start
# or
expo start
```
