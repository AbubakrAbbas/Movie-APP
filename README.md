# Movie-APP

A movie discovery application built with React and Vite. Displays trending movies and lets users maintain a personal favorites list.

**Live Demo:** [add link after deployment]
**Repository:** https://github.com/AbubakrAbbas/Movie-APP

## Overview

Movie-APP fetches and displays trending movies on the home page. Users can mark any movie as a favorite, and it will appear on a separate favorites page for quick access later.

## Features

- Browse today's trending movies
- Mark or unmark movies as favorites
- Dedicated favorites page for saved movies
- Responsive layout across devices

## Tech Stack

- React.js
- Vite
- CSS (component-scoped stylesheets)
- External movie data API (see `src/services/API.js`)

## Project Structure

```
movie-display/
├── src/
│   ├── components/
│   │   ├── Favorite.jsx
│   │   ├── Home.jsx
│   │   ├── MovieCard.jsx
│   │   └── Navbar.jsx
│   ├── services/
│   │   └── API.js
│   ├── styles/
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation

```bash
git clone https://github.com/AbubakrAbbas/Movie-APP.git
cd Movie-APP
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with a key from the movie data provider used in `src/services/API.js`.

### Run Locally

```bash
npm run dev
```

App runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

## Deployment

Deployed on Vercel. To deploy your own instance:

1. Push the repository to GitHub
2. Import it into Vercel
3. Add `VITE_API_KEY` under Environment Variables in the Vercel project settings
4. Deploy

## License

MIT

## Author

Abubakr Abbas
[github.com/AbubakrAbbas](https://github.com/AbubakrAbbas)
