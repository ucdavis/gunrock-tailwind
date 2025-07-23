tailwind config file for UC D projects

npm install @ucdavis/gunrock-tailwind

global.css should look like

@import 'tailwindcss';
@plugin "daisyui";
@import './gunrocktailwind.css';

you can overide both daisy and tailwind like below

@plugin "daisyui/theme" {
name: 'gunrock';
--color-primary: var(--color-ucd-doubledecker);
}

@theme inline {
--color-primary-color: var(--color-ucd-recpool);
}
