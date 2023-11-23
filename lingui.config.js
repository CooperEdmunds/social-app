/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'cs', 'fr', 'hi', 'es', 'jp'],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}
