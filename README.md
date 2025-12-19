# Lisbon Recycling Web App

This application helps residents of Lisbon, Connecticut quickly find out when their next recycling pickup day is, based on their street address.

## Purpose

The goal of this app is to make it easy for Lisbon residents to:

- Select their street from a searchable list
- Instantly see the next scheduled recycling pickup date for their location
- Know how many days remain until the next pickup

This reduces confusion about recycling schedules and helps ensure timely participation in the town's recycling program.

## Technical Details

- **Frontend:** Built with React, using TypeScript for type safety and maintainability.
- **UI Framework:** Uses Material UI (MUI) for modern, accessible components and styling.
- **Routing:** Utilizes React Router for client-side navigation.
- **Data:** Recycling days and street/zone mappings are loaded from static JSON files (`public/days.json` and `public/streets.json`).
- **State Management:** Uses React context to persist the user's selected street in local storage for convenience.
- **Deployment:** The app is built and deployed as a static site using Vite for fast builds and optimized output.
- **Analytics:** Integrates with Microsoft Clarity for anonymous usage analytics.

## Deployment & Domain

- The application is set up to deploy automatically to the `gh-pages` branch using the `gh-pages` npm package.
- The custom domain [lisbonrecycling.com](https://lisbonrecycling.com) is pointed directly to the GitHub Pages deployment, making the app easily accessible to the public.

## Development

- To run locally: `npm install` then `npm run dev`
- To build for production: `npm run build`
- To deploy: `npm run deploy`

---

For questions or suggestions, please open an issue or contact Christopher Snay at christopher.snay@gmail.com
