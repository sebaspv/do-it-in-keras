export default {
  github: 'https://github.com/sebaspv/do-it-in-keras',
  docsRepositoryBase: 'https://github.com/sebaspv/do-it-in-keras/tree/main/web', // base URL for the docs repository
  titleSuffix: ' – Do it in Keras',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Sebaspv.`,
  footerEditLink: `Edit this page on GitHub`,
  unstable_faviconGlyph: '💻',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Do it in Keras</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Modern deep learning architectures and tasks
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Do it in Keras: Modern deep learning architectures and tasks" />
      <meta name="og:title" content="Do it in Keras: Modern deep learning architectures and tasks" />
    </>
  ),
}