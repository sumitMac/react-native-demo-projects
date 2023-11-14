module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react-native/all",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": 0, // avoid to take propsType
    "react/react-in-jsx-scope": 0,
  },
  plugins: ["react", "react-native", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    "react-native/react-native": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
