const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
    .reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {})

module.exports = {
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  extends: ["airbnb-typescript"],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    "no-debugger": "off",
    "no-console": 0,
    "@typescript-eslint/indent": ["error", 4],
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "import/prefer-default-export": "off",
    "default-case": "off",
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    ...a11yOff
  }
}
