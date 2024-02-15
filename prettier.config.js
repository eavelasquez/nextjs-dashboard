const styleguide = require('@vercel/style-guide/prettier');

/** @type {import('prettier').Config} */
module.exports = {
  ...styleguide,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '^@/.*$',
    '',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.0.0',
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};
