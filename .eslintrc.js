module.exports = {
  extends: [
    'nestjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'semi': ['error', 'always'], // Asegurarte de que se aplique la regla del punto y coma
    'comma-dangle': ['error', 'never'], // Asegurarte de que no haya comas al final
    'space-before-function-paren': ['error', 'always'] // Asegurarte de que haya un espacio antes de los paréntesis
  }
};
