module.exports = (noscript) => `
  <html>
    <head>
      <meta name = "viewport" content = "initial-scale=1.0, maximum-scale=0.5, width=device-width">
      <meta property="og:title" content="Jesse Jurman" />
      <meta property="og:url" content="http://jrjurman.com" />
      <meta property="og:image" content="http://jrjurman.com/assets/preview.png" />
      <title>Jesse Jurman</title>
      <link rel="stylesheet" href="/assets/cosmo.min.css">
      <link rel="stylesheet" href="/assets/vhs.min.css">
      <link rel="icon" type="image/png" href="/favicon.png" />
    </head>
    <body>
      <script src="/index.js"></script>
      ${noscript}
    </body>
  </html>
`
