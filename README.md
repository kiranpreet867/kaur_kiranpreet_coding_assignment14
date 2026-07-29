# Kaur_Kiranpreet_Coding_Assignment14

## Overview

This project is a React Portfolio Website developed for WEBD-3012 Business Systems Build and Testing. The portfolio showcases projects completed throughout the Web Development program while demonstrating the use of reusable React components, code quality tools, automated testing, Docker deployment, and GitHub Actions.

---

## Features

The portfolio includes the following sections:

- Home
- About Me
- Skills
- Projects
- Contact

The website is built using reusable UI components developed in previous assignments, including:

- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter

---

## Code Quality Checks

The project includes automated quality checks to ensure consistent and reliable code.

The following checks are performed:

- Prettier formatting
- ESLint code analysis
- React unit tests
- Production build verification

---

## Husky Pre-Commit Hook

Husky is configured to prevent commits when quality checks fail.

Before every commit, Husky automatically runs:

```bash
npm run check
```

This command executes:

```bash
npm run format
npm run lint
npm test -- --watchAll=false
```

If any check fails, the commit is blocked until the issues are corrected.

---

## GitHub Actions

GitHub Actions automatically performs continuous integration whenever code is pushed to GitHub or a Pull Request is created.

The workflow performs the following tasks:

- Install project dependencies
- Run Prettier
- Run ESLint
- Run React tests
- Build the production application

This helps ensure code quality before deployment.

---

## Installation

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

---

## Docker Instructions

Build the Docker image:

```bash
docker build -t kaur_kiranpreet_coding_assignment14 .
```

Run the Docker container:

```bash
docker run --name kaur_kiranpreet_coding_assignment14 -p 5575:5575 kaur_kiranpreet_coding_assignment14
```

Open the application:

```text
http://localhost:5575
```

---

## Project Structure

```text
src/
public/
components/
.storybook/
.github/
.github/workflows/
.husky/
Dockerfile
nginx.conf
README.md
package.json
```

---

## Technologies Used

- React
- TypeScript
- Storybook
- Styled Components
- Husky
- Prettier
- ESLint
- Jest
- GitHub Actions
- Docker

---

## GitHub Repository

https://github.com/kiranpreet867/kaur_kiranpreet_coding_assignment14

---

## Author

Kiranpreet Kaur