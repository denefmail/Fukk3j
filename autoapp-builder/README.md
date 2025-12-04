# Autoapp Builder (extracted)

This folder contains the extracted autoapp-builder template. It provides a small Next.js app that demonstrates a UI to scaffold starter projects from templates.

Structure:

- package.json - dependencies and scripts for the app
- pages/ - Next.js pages, including an API route to "generate" a template
- templates/nextjs-app/ - a minimal next.js starter template
- public/.gitkeep - placeholder

Usage:

1. From the repository root, change into autoapp-builder and run:

   npm install
   npm run dev

2. Open http://localhost:3000/autoapp-builder/ to view the app (depending on how your monorepo is served, you may need to adjust routing).

Notes:
- The API route included is a stub and returns a JSON response. In the real project it would scaffold files or return a zip.
