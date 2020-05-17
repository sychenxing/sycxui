
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {pathUtil, themeTargets, compsTarges} = require('../util');


// function getEntry() {
//   let targets = process.env.TARGETS;

//   if (targets) {
//     targets = targets.split(',')
//   } else {
//     targets = allPackages();
//   }

//   let entry = {};
//   for (const target of targets) {
//     entry[target] = `./packages/${target}/index.js`
//     entry[target] = `./packages/${target}/style.js`
//   }

//   return entry;
// }


// module.exports = merge(webpackBaseConfig, {
//   entry: getEntry(),
//   output: {
//       path: pathUtil.dist + '/lib',
//       filename: '[name].js',
//       libraryTarget: 'umd',
//   },
//   plugins: [
//     new CleanWebpackPlugin({
//         cleanOnceBeforeBuildPatterns: [pathUtil.dist]
//     })
//   ]
// })


function buildComponents() {
  let entry = {};
  for (const target of compsTarges) {
    if (target === 'main') {
      entry['index'] = `./packages/${target}/index.js`;
    } else {
      entry[target] = `./packages/${target}/index.js`;
    }
  }

  let output = {
    path: pathUtil.root + `/lib`,
    filename: '[name].js',
    libraryTarget: 'umd'
  };

  return {
    entry,
    output
  }
}

function buildTheme() {
  let entry = {};
  for (const target of compsTarges) {
    if (target === 'main') {
      entry['index'] = `./packages/${target}/theme/index.css`;
      entry['base'] = `./packages/${target}/theme/base.css`;
    } else {
      entry[target] = `./packages/${target}/src/style/index.css`;
    }
  }

  let output = {
    path: pathUtil.root + `/lib/theme`,
    filename: '[name].js'
  };

  return {
    entry,
    output
  }
}


module.exports = (env) => {
    let buildType = env.BUILD_TYPE

    let config = {}
    if (buildType === 'component') {
        config = buildComponents()
    } else {
        config = buildTheme()
    }

    return merge(webpackBaseConfig, {
      entry: config.entry,
      output: config.output,
      plugins: []
    })
}