module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'graphql', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
    'no-underscore-dangle': 0,
    'operator-linebreak': 0,
    'comma-dangle': [2, 'always-multiline'],
    'react/jsx-one-expression-per-line': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/first': 1,
    indent: 0,
    quotes: 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-nested-ternary': 0,
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/no-redundant-should-component-update': 0,
    'react/no-array-index-key': 0,
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/no-unused-prop-types': 2,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    'react/jsx-key': 1,
    'react/no-did-mount-set-state': 0,
    'require-yield': 0,
    'arrow-body-style': 0,
    'react/boolean-prop-naming': [
      1,
      {
        rule: '(is|has|should|Is|Has|Should|can|Can|show|Show|use|Use)',
      },
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'gatsby',
        validators: 'all',
        tagName: 'graphql',
      },
    ],
  },
};
