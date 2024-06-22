const tseslint = require('typescript-eslint');
const { LintGolem } = require('@magik_io/lint_golem');

module.exports = tseslint.config(
  ...new LintGolem({
    rootDir: __dirname,
    tsconfigPaths: ['tsconfig.json'],
    ignoreGlobs: ['node_modules/**', '*.lock'],
    disabledRules: [
      'n/no-extraneous-import',
      'n/no-missing-import',
      'n/no-unpublished-import',
      'n/no-require-imports',
      'n/hashbang'
    ]
  }).config
)
