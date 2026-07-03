# Live Class Application

This repository contains a full-stack live class application using:

- React frontend (`client/`)
- Express + MongoDB backend (`server/`)
- ZEGOCLOUD prebuilt video SDK

## Setup

### 1. Backend

1. Open a terminal and navigate to `server/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
4. Update `server/.env` with your values:
   - `PORT` (for example `5000`)
   - `CLIENT_URL` (for example `http://localhost:3000`)
   - `MONGO_URI` (for local MongoDB or Atlas)
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
5. Start the server:
   ```bash
   npm run dev
   ```

### 2. Frontend

1. Open a terminal and navigate to `client/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
4. Update `client/.env` with your values:
   - `REACT_APP_API_URL` (for example `http://localhost:5000/api`)
   - `REACT_APP_ZEGO_APP_ID`
   - `REACT_APP_ZEGO_SERVER_SECRET`
5. Start the React app:
   ```bash
   npm start
   ```

## ZEGOCLOUD Setup

- Obtain `App ID` and `Server Secret` from your ZEGOCLOUD console.
- Fill those values in `client/.env`.
- This app uses frontend token generation for test/demo mode via `ZegoUIKitPrebuilt.generateKitTokenForTest`.

## MongoDB Setup

- For local development, start MongoDB locally and use a URI like:
  `mongodb://127.0.0.1:27017/liveclassdb`
- For Atlas, use your Atlas connection string in `server/.env`.

## Notes

- `client/.env` and `server/.env` are ignored by git.
- If the frontend or backend fails to start, verify that the environment variables are populated correctly.
- The backend uses `process.env.CLIENT_URL` for CORS and `process.env.MONGO_URI` for database connection.
