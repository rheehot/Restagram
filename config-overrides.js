/* config-overrides.js */

const path = require('path');

module.exports = function override(config) {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, 'src'),
  ];

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@components': 'components',
    '@pages': 'pages',
    '@hooks': 'hooks',
    '@styles': 'styles',
    '@utils': 'utils',
    '@images': 'images',
  };
  return config;
};
