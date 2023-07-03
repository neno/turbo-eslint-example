module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@nenoweb/eslint-config-custom`
  extends: ['@nenoweb/eslint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
