const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@$': path.resolve(__dirname, 'src'),
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // '@nav-bar-background-color': '#99CCFF',
            '@nav-bar-background-color': '#1989fa',
            '@nav-bar-title-text-color': '#fff',
            '@nav-bar-text-color': '#fff',
            '@tabs-card-height': '50px',
            '@tabs-line-height': '50px',
            '@tabs-default-color': '#99CCFF',
          },
        },
      },
    },
  },
};
