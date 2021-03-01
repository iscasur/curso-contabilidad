module.exports = {
  siteMetadata: {
    siteTitle: `Curso de Contabilidad`,
    defaultTitle: `Curso de Contabilidad`,
    siteTitleShort: `Curso de Contabilidad`,
    siteDescription: `Aprende contabilidad desde cero, a tu ritmo y completamente gratis`,
    siteUrl: `https://conta.soy`,
    siteAuthor: `@iscasur`,
    siteImage: `/banner.png`,
    siteLanguage: `es`,
    themeColor: `#5599ee`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/iscasur/curso-contabilidad`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Curso de contabilidad`,
        short_name: `Curso contable`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `263824151`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://curso.conta.soy`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
