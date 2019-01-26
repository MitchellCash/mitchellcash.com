const path = require('path')

module.exports = {
  siteMetadata: {
    title: "MitchellCash.com",
    titleTemplate: "%s - MitchellCash.com",
    description: "I'm Mitchell Cash: sort of geeky, sort of not.",
    author: "Mitchell Cash",
    siteUrl: "https://mitchellcash.com",
    image: "/img/avatar.jpeg",
    twitterUsername: "@Mitch_Cash"
  },
  plugins: [
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-35031246-1",
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "MitchellCash.com",
        short_name: "MitchellCash",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/assets/img/icon.png"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "assets", "img")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.join(__dirname, "src", "pages", "posts")
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-reading-time",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify"
  ]
}
