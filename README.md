# Swifty Companion

A mobile companion app for École 42 students, built with React Native (Expo). It authenticates against the 42 API via OAuth 2.0 and lets students browse their own profile, look up any other student's public profile, and see upcoming campus events.

## Features

- **42 API OAuth 2.0** — authorization code flow through `api.intra.42.fr`, with `state` parameter validation and tokens kept in secure storage (`expo-secure-store`)
- **My profile** — displays the logged-in student's profile: skills with progress, level, and personal info
- **Student search** — look up any login and view their public profile
- **Campus events** — list of upcoming events with event registration

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.79 with Expo SDK 53 |
| Language | TypeScript |
| Navigation | expo-router |
| State management | Redux Toolkit |
| Networking | axios |
| Auth | expo-web-browser + expo-secure-store |

## Project Structure

```
├── app/                    # Screens (expo-router file-based routing)
│   ├── _layout.tsx         # Root layout, Redux Provider
│   ├── index.tsx           # Home: login + student search
│   ├── oauth.tsx           # OAuth redirect callback
│   ├── my-profile.tsx      # Logged-in user's profile + events
│   └── profile/[login].tsx # Public profile of any student
├── src/
│   ├── api/                # 42 API clients (auth, user, public profile, events)
│   ├── components/        # Reusable UI components
│   ├── store/              # Redux slices (auth, user, events, public profile)
│   ├── styles/             # Shared styles and design tokens
│   └── types/              # TypeScript interfaces for API models
└── assets/                 # Images and fonts
```

## Getting Started

### Prerequisites

- Node.js (LTS)
- The [Expo Go](https://expo.dev/go) app on your device, or an iOS/Android simulator
- A 42 API application registered at [https://profile.intra.42.fr/oauth/applications](https://profile.intra.42.fr/oauth/applications)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your 42 OAuth application with the redirect URI:

   ```
   swifty-companion://oauth
   ```

3. Provide your application's UID in a `.env` file at the project root:

   ```bash
   echo "EXPO_PUBLIC_CLIENT_UID=your_42_app_uid" >> .env
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Then scan the QR code with Expo Go, or run on a simulator:

   ```bash
   npm run ios     # iOS simulator
   npm run android # Android emulator
   ```

## How the OAuth Flow Works

1. The app opens the 42 authorization page with `expo-web-browser`, requesting a `public profile` scoped authorization code
2. After the student approves, 42 redirects to `swifty-companion://oauth` with the code
3. The app exchanges the code for an access token and stores it securely
4. The token is used for all subsequent 42 API calls (profile, events)

## Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Expo dev server |
| `npm run ios` | Run on iOS |
| `npm run android` | Run on Android |
| `npm run web` | Run in the browser |
| `npm run lint` | Run ESLint |
