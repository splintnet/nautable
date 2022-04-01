module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next",
    "next/core-web-vitals"
  ],
  rules: {
    "react/jsx-max-props-per-line": [1, {"maximum": 1}],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }]
  }
}
