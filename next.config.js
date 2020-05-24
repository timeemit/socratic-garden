const path = require('path')

const pathAliases = [
  'components',
  'models',
  'pages',
  'styles',
];

module.exports = {
  webpack(config, options) {
    pathAliases.forEach((pathAlias) => {
      config.resolve.alias[pathAlias] = path.join(__dirname, pathAlias);
    });
    return config;
  },
}
