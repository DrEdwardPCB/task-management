# Task Management

this is a simple task management web application. this allows user to manage task easily. task are stored in local storage

## motivation

this is an assignment of cantek web development

# objective

to complete assignment

## live demo

[live demo]()

# specification

## prerequisite

-   node installed
-   npm installed

## getting started

```sh
git clone <url of this repo>
cd <root of this repo>
npm install
npm run dev
```

## requirements

-   used react-bootstrap as style provider
-   used formik as form state handler
-   used Yup as form validator

# comment and difficulties

-   this task is just a fancier todo list and there are way better alternatives for the ui and state management can be used
    -   e.g. rect-hook-form to replace formik
    -   e.g. zod to replace yup
    -   e.g. tailwind to replace react-bootstrap
-   This is a good practice for me to recap some of the older projects that I may be facing in the future of my career.

<details>
<summary>React + TypeScript + Vite</summary>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
      ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
</details>
