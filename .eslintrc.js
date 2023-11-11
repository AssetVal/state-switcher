module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: true,
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:n/recommended',
    'plugin:security/recommended',
    'plugin:import/typescript',
    'plugin:@getify/proper-ternary/getify-says',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'n',
    'security',
    '@getify/proper-ternary',
  ],
  env: { 'shared-node-browser': true },
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    '@typescript-eslint/ban-ts-comment': 'off',
    // Enforce naming conventions (Leave to ts-rule below)
    "camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": ["parameter", "memberLike", "function"],
        "format": ["camelCase", 'PascalCase'],
        "leadingUnderscore": "allow"
      },
      {
        "selector": ["typeLike", "interface", "import"],
        "format": ["PascalCase", "camelCase"],
      },
      {
        "selector": ["class"],
        "format": ["PascalCase"],
      },
      { // Don't enforce naming convention on destructured variables
        "selector": "variable",
        "modifiers": ["destructured"],
        "format": null
      },
      {
        "selector": ['objectLiteralProperty', 'classProperty', "variable", "typeProperty"],
        "format": null
      },
      { // Allow quoted properties
        "selector": [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember"
        ],
        "format": null,
        "modifiers": ["requiresQuotes"]
      },
    ],
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/first': 'off',
    '@getify/proper-ternary/where': 'off',
    '@getify/proper-ternary/nested': ['error', { test: false, then: true, else: true }],
    'object-shorthand': 'off',
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: [
          'dynamicImport',
          'modules',
        ],
      },
    ],
    'no-nested-ternary': 'off',
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'no-sequences': 'error',
    'one-var': 'off',
    'class-methods-use-this': 'off',
    'one-var-declaration-per-line': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    // 'max-len': 'off',
    'no-unused-expressions': 'off',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'no-shadow': [
      'error',
      { hoist: 'never' },
    ],
    'no-restricted-syntax': 'off',
    'no-inner-declarations': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-new': 'off',
    'newline-per-chained-call': 'off',
    'no-lonely-if': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'camelcase': 'off',
    'max-classes-per-file': 'off',
    'spaced-comment': 'off',
    "no-constant-binary-expression": "error",
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-fs-filename': 'off',
  }
};
