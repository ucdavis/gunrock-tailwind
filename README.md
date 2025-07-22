tailwind config file for UC D projects

npm install @ucdavis/gunrock-tailwind

// tailwind.config.js
const preset = require('@ucdavis/gunrock-tailwind');

module.exports = {
...preset,
content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};

global css
@tailwind base;
@tailwind components;
@tailwind utilities;
