module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      'tsconfig.json',
    ],
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: [
          './tsconfig.json',
        ],
      },
    },
  },
  rules: {
    'linebreak-style': 'off',
    'react/prop-types': 0,
    'import/no-cycle': 'off',
    'react/jsx-indent': [2, 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'guard-for-in': 'off',
    'import/no-duplicates': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    camelcase: 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    '@typescript-eslint/naming-convention': ['error', {
      format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
      selector: 'variable',
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error'],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      },
    }],
    'react/jsx-props-no-spreading': 'off',
    'import-helpers/order-imports': ['warn', {
      newlinesBetween: 'always',
      groups: [
        '/^react/',
        'module',
        '/^@shared/',
        '/^@core/',
        '/^@modules/',
        '/^@configs/',
        '/^~/',
        ['parent', 'sibling', 'index'],
      ],
      alphabetize: { order: 'asc', ignoreCase: true },
    },
    ]
  },
};
