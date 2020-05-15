
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {allPackages, pathUtil} = require('../util');

function getEntry() {
  let targets = process.env.TARGETS;

  if (targets) {
    targets = targets.split(',')
  } else {
    targets = allPackages();
  }

  let entry = {};
  for (const target of targets) {
    entry[target] = `./packages/${target}/index.js`
  }

  return entry;
}


module.exports = merge(webpackBaseConfig, {
  entry: getEntry(),
  output: {
      path: pathUtil.dist + '/lib',
      filename: '[name].js',
      libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [pathUtil.dist]
    })
  ]
})