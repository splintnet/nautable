module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'next',
    'next/core-web-vitals',
  ],

  rules: {
    'no-console': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
  },
};
