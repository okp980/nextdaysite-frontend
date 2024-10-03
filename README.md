# NEXTDAYSITE FRONTEND DOCUMENTATION

`Project Name`: nextdaysite-frontend

`Description`: This single workspace(monorepo) project contains all frontend projects built for the NEXTDAYSITE projects. Next JS will be used for creating the web applications. It is managed using Turborepo. Turborepo is used to manage monorepo structure and handle the build pipelines efficiently.

`Tech Stack`: Next JS, TypeScript, Tailwind CSS, Turborepo.

## Folder Structure

At the root, you will find both the app and packages folder. The app directory will contain the different web applications built by NEXTDAYSITE. The packages directory will contain reusable components, utility functions, services, etc., used across the project.

- `app`
  - `omome` : web application built with [Next.js](https://nextjs.org/)
- `packages`
  - `ui` : shared UI components
  - `utils` : utility functions used across the project
  - `eslint-config` : `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `typescript-config` : `tsconfig.json` used throughout the monorepo
  - `tailwind-config` : `tailwind.config.json` and `global-style.css` used throughout the monorepo

## Utilities

This project has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) to enforce `eslint` and `prettier` on git hooks for pre-commit and commit-msg
- [Tailwind](https://prettier.io) for css styling
- [NextUI](https://nextui.org/) UI library for consistency
- [FramerMotion](https://www.framer.com/motion/) for animation

## Prerequisites:

- Node JS >= 18.x
- Npm

## Installation

- Clone the repository

  ```
  git clone https://github.com/nextdaysite-frontend/
  ```

- Install dependencies and run on local machine
  ```
  cd nextdaysite-frontend
  npm install
  npm run dev
  ```

### Develop

To develop `omome` web application, run the following command:

```
cd nextdaysite-frontend
npm run dev:omume
```

### Build

To build `omome` web application, run the following command:

```
cd nextdaysite-frontend
npm run build:omume
```
