[日本語版 README はこちら](https://github.com/mayl730/population-of-japan/blob/main/README-jp.md)

# Population of Japan by prefecture

Discover Japan's Population Trend with Vue3 + Vite!

Choose your favorite prefecture and explore Japan's latest population trend in this project. Learn more about the country's changing demographics!

![image for the website](./thumbnail.png)

Live site:
[https://population-of-japan.vercel.app/](https://population-of-japan.vercel.app/)

## Tech Stack
- [x] [VueJS (Vue3)](https://vuejs.org/)
- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Pinia](https://pinia.vuejs.org/) for state management
- [x] [RESAS API](https://opendata.resas-portal.go.jp/) for getting population data in Japan
- [x] [Highcharts](https://www.highcharts.com/) for interactive graph
- [x] [TypeScript](https://www.typescriptlang.org/) and [Vue tsc](https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc) for static analysis
- [x] [ESLint](https://eslint.vuejs.org/) for syntax checking and code styling

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (https://nodejs.org) should be installed on your machine.

### Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/mayl730/population-of-japan
```

2. Install the dependencies using npm.

```bash
npm install
```

3. Sign up and get your API key at here: [RESAS API](https://opendata.resas-portal.go.jp/)

4. Setup your environment file and name it as ```.env```. [env file template](https://github.com/mayl730/population-of-japan/blob/main/.env.template)

Put your own API key at the environment file:
```env
VITE_API_KEY=XXXXXXXXXXXXXXXXXXXXXX
```

5. Running the Development Server
```bash
npm run dev
```

### Additional Commands
`npm run build` : Build the production-ready code in the dist folder.

## Future Update
- [ ] Display error messages on the website during failure states.
- [ ] Conduct tests using Cypress.