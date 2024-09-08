# Weather App Project

This project consists of two parts: a landing page and a weather application. The landing page is built with pure JavaScript (TypeScript), while the weather app uses React. The weather app is loaded inside the landing page when requested.

## Project Links

- Landing Page: [https://js-weather-landing-page-115.web.app](https://js-weather-landing-page-115.web.app)
- Weather App: [https://react-weather-app-115-2ddd0.web.app/](https://react-weather-app-115-2ddd0.web.app/)
- Landing Page GitHub Repository: [https://github.com/dylogedyloge/weather-landing-page](https://github.com/dylogedyloge/weather-landing-page)
- Weather App GitHub Repository: [https://github.com/dylogedyloge/weather-app](https://github.com/dylogedyloge/weather-app)

## Features

- Landing page with a button to load the weather app
- Weather app displays current location and weather details
- Forecast for the next few days
- Responsive design
- Automated deployment using GitHub Actions and Firebase

## Technology Stack

- Landing Page: TypeScript, Webpack, Tailwind CSS
- Weather App: React, Create React App, Tailwind CSS
- API: OpenWeatherMap
- Deployment: Firebase Hosting
- CI/CD: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

### Installation

1. Clone the repositories:

   ```bash
   git clone https://github.com/dylogedyloge/weather-landing-page.git
   git clone https://github.com/dylogedyloge/weather-app.git
   ```

2. Install dependencies for both projects:

   ```bash
   cd landing-page
   npm install

   cd ../weather-app
   npm install
   ```

3. Set up environment variables:
   - In the weather app project, create a `.env` file and add your OpenWeatherMap API key:
     ```
     REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

### Running Locally

1. Start the landing page:

   ```bash
   cd landing-page
   npm start
   ```

2. In a new terminal, start the weather app:

   ```bash
   cd weather-app
   npm start
   ```

3. Open your browser and navigate to `http://localhost:9000` to view the landing page.

## Testing

Both projects include unit tests and end-to-end tests.

To run tests for the landing page:

````bash
cd landing-page
npm test

To run tests for the weather app:

```bash
cd weather-app
npm test
````

## Deployment

Both projects are deployed on Firebase Hosting using GitHub Actions. The deployment workflow is triggered on push to the main branch.

## Project Structure

- landing-page-/: Contains the landing page project
- src/: Source files
- dist/: Built files (created when building the project)
- webpack.config.js: Webpack configuration
- .github/workflows/: GitHub Actions workflow files
- weather-app/: Contains the weather app project
- src/: Source files
- public/: Public assets
- build/: Built files (created when building the project)
- .github/workflows/: GitHub Actions workflow files
