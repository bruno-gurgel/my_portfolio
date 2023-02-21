module.exports = {
  // Configuration for JavaScript files
  extends: [
    'airbnb-base',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  rules: {
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        bracketSpacing: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'],
      extends: [
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'consistent-return': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-console': 'off',
        'no-restricted-syntax': 'off',
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
            trailingComma: 'none',
            tabWidth: 2,
            bracketSpacing: true,
            semi: false
          }
        ],
        'react/destructuring-assignment': 'off',
        // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off',
        // Next.js use his own internal link system
        'react/require-default-props': 'off',
        // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off',
        // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off',
        // Incorrectly report needed dependency with Next.js router
        '@next/next/no-img-element': 'off',
        // We currently not using next/image because it isn't supported with SSG mode
        '@typescript-eslint/comma-dangle': 'off',
        // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off',
        // Named export is easier to refactor automatically
        'simple-import-sort/imports': 'error',
        // Import configuration for `eslint-plugin-simple-import-sort`
        'simple-import-sort/exports': 'error',
        // Export configuration for `eslint-plugin-simple-import-sort`
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'react/no-unescaped-entities': 'off',
        'unused-imports/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_'
          }
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-else-return': 'off',
        'no-case-declarations': 'off'
      }
    }
  ]
}
