module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    //'plugin:vue/recommended',
   //'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "quotes": ["error", "single"],
    "indent": "off",
    'semi': [1, 'always'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1
    }]
    //'prettier/prettier': ['error', { 'semi': true }]
  }
}
