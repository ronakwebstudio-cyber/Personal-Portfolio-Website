# Portfolio MERN Upgrade

This workspace contains your original static site plus a new `server/` and `client/` folders to run a MERN-style portfolio.

Quick start (two terminals):

1) Server (requires Node.js and MongoDB)

```bash
cd server
npm install
# copy .env.example to .env and set MONGO_URI if needed
npm run dev
```

2) Client

```bash
cd client
npm install
npm run dev
```

During development the client uses Vite (default port 5173) and server runs on port 5000. The React app calls `/api/*` endpoints — in production you can proxy or host both together.

Production build and run

- Build the client application:

```bash
cd client
npm install
npm run build
```

- Serve the built client from the Express server:

```bash
cd server
# install server deps if needed
npm install
# (optional) set environment variable for production
# PowerShell: $env:NODE_ENV = "production"
# CMD: set NODE_ENV=production
node index.js
```

The server is already configured to serve the `client/dist` folder when `NODE_ENV` is `production`. For hosted deployments (Heroku, Render, etc.) build the client in a deploy step and run the server.
