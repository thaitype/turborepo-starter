# 🚀 Turborepo Starter

[![Test and Build](https://github.com/thaitype/turborepo-starter/actions/workflows/test-and-build.yml/badge.svg)](https://github.com/thaitype/turborepo-starter/actions/workflows/test-and-build.yml)

A modern **Turborepo** starter template designed for scalability, maintainability, and modularity.

## 📖 Philosophy

- **Modern Tooling:** Utilizes cutting-edge tools and best practices.
- **Modular Design:** Each project/package is **independent**, allowing easy removal of unnecessary dependencies.
- **No Root-Level Dependencies:** Avoids installing packages in the root workspace to prevent monolithic growth, making maintenance easier, except for `turbo` and `typescript`.
- **Consistent Configuration:** Shared configurations for ESLint, Prettier, and TypeScript to ensure consistency across all projects.
- **TypeScript Everywhere:** All projects/packages are written in TypeScript for static type checking and improved developer experience.
- **Automated Workflows:** Includes scripts for building, testing, and linting all projects/packages at once.
- **Shared Components:** A shared React component library for reuse across all projects/packages.
- **Vite for Testing:** Uses Vite for fast and reliable testing.

## 🏗️ What's Inside?

This **Turborepo** setup includes the following **apps and packages**:

### **📦 Apps**
- **`nextjs`** - A [Next.js](https://nextjs.org/) application for frontend.
- **`cli`** - A command-line tool for automation.

### **🔧 Packages**
- **`@acme/ui`** - A shared React component library for reuse across apps.
- **`@acme/shared`** - A shared utility package for common functions.

### **⚙️ Configs**
- **`@acme/eslint-config`** - A centralized ESLint configuration (`eslint-config-next`, `eslint-config-prettier`).
- **`@acme/typescript-config`** - Shared TypeScript configuration (`tsconfig.json`) for consistency.
- **`@acme/vitest-config`** - Shared Vitest configuration for testing.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Vitest](https://vitest.dev/) for testing

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Test

To test all apps and packages, run the following command:

```
pnpm test
```

## References
- https://github.com/vercel/turborepo/blob/main/examples/with-vitest/