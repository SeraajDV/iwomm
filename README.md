# It Worked On My Machine™

A tongue-in-cheek incident excuse and badge generator for developers. Generate a random excuse, customize its incident badge, then copy a chat-ready status update or download the badge as a PNG.

## Features

- Generate from excuses covering infrastructure, frontend, backend, and cosmic incidents.
- Customize the developer name, incident or Jira ID, and badge theme.
- Choose from Hazard Amber, Prod Down Red, and Matrix Green themes.
- Copy a formatted message for sharing in chat.
- Export a high-resolution PNG badge.

## Getting started

Install a compatible version of Node.js, then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the project and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## Tech stack

React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Badge images are generated in the browser with `html-to-image`.
