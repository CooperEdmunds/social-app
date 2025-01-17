/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'hi', 'ja', 'fr', 'de', 'es', 'ko', 'es', 'pt-BR', 'uk'],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}
