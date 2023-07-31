[日本語版 README はこちら](https://github.com/gfngfn/SATySFi/blob/master/README-ja.md)


# Population of Japan by prefecture

A Vue3 + Vite project on showing the population trend in Japan.
You can select the prefecture you like an learn more about Japan

![image for the website](./thumbnail.jpg)

You can check the live site here:<br>
[https://population-of-japan.vercel.app/](https://population-of-japan.vercel.app/)

## Tech Stack
- [x] [VueJS (Vue3)](https://vuejs.org/)
- [x] [Vite](https://github.com/vitejs/vite)
- [x] [Pinia](https://pinia.vuejs.org/) for state management
- [x] [RESAS API](https://vuejs.org/) for getting population data in Japan
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

3. Setup your local environment file and name it as ```.env```.
You can check the template of env here: [environment file template](https://github.com/mayl730/population-of-japan/.env.template)
```env
VITE_API_KEY=XXXXXXXXXXXXXXXXXXXXXX
```

3. Running the Development Server
```bash
npm run dev
```

### Additional Commands
`npm run build` : Build the production-ready code in the dist folder.







# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
