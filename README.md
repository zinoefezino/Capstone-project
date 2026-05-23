# PlanetTable Component

## Description
The `PlanetTable` component fetches and displays data about planets 
in our solar system in a responsive grid layout. Each planet is 
displayed as a card showing its image, name, and distance from the sun.

## Screenshot
(Add a screenshot of your planet section here)

## Tech Stack
- React
- CSS
- Fetch API

## Getting Started

### Prerequisites
- Node.js installed
- Git installed

### Installation
1. Clone the repo
   git clone https://github.com/zinoefezino/Capstone-project.git
2. Navigate into the project
   cd Capstone-project
3. Install dependencies
   npm install
4. Run the project
   npm run dev


## API
Data is fetched from:
https://anurella.github.io/json/planets.json

## Features
- Fetches planet name, distance from sun and image from API
- Displays planets in a responsive grid layout
- Uses semantic figure and figcaption elements
- Handles loading and error states
- Fully responsive across desktop, tablet and mobile

## Responsive Breakpoints
| Screen Size | Columns |
|-------------|---------|
| Desktop (above 768px) | 3 columns |
| Tablet (768px and below) | 2 columns |
| Mobile (480px and below) | 2 columns |

## File Location
src/
├── components/
│   └── PlanetTable.jsx
├── styles/
│   └── global.css
## Author
**ADENIYI JULIUS**
Branch: `planet-Table`
