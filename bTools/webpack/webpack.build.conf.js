
const path = require('path')
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')
const {allPackages, pathUtil} = require('../util');


const rootPath = path.resolve(__dirname, '../..')  
const distPath = path.resolve(__dirname, '../../dist')  

function getMode(){
   let mode = process.env.NODE_ENV;
   return mode;
}

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
  mode: getMode(),
  devtool: 'source-map',
  entry: getEntry(),
  output: {
      path: distPath + '/lib',
      filename: '[name].js',
  },
  // externals: {
  //     vue: {
  //         root: 'Vue',
  //         commonjs: 'vue',
  //         commonjs2: 'vue',
  //         amd: 'vue'
  //     }
  // },
  plugins: [
      // new webpack.DefinePlugin({
      //     'process.env.NODE_ENV': '"production"'
      // }),
      // new UglifyJsPlugin({
      //     parallel: true,
      //     sourceMap: true
      // }),
      // new CompressionPlugin({
      //     asset: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: /\.(js|css)$/,
      //     threshold: 10240,
      //     minRatio: 0.8
      // })
  ]
})



// function getMode(){
//    let mode = process.env.NODE_ENV;
//    return mode;
// }

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
//   }

//   return entry;
// }

// function getOutput() {
//   let ouput = {
//     filename: '[name].js',
//     path: distPath + '/lib'
//   };
//   return ouput;
// }

// function getResolve() {
//   let resolve = {
//     extensions: ['.js', '.jsx', '.vue']
//   };

//   return resolve;
// }

// function getModule() {
//   let rules = {
//       rules: [
//         {
//           test: /\.vue$/,
//           loader: 'vue-loader',
//         },
//         {
//           test: /\.(js|jsx)$/,
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               [
//                 'env',
//                 {
//                   targets: {
//                     browsers: [
//                       'last 2 versions',
//                       'Firefox ESR',
//                       '> 1%',
//                       'ie >= 9',
//                       'iOS >= 8',
//                       'Android >= 4',
//                     ],
//                   },
//                 },
//               ],
//             ],
//             plugins: [
//             ],
//           },
//         },
//         {
//           test: /\.(png|jpg|gif|svg)$/,
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]?[hash]',
//           },
//         },
//         {
//           test: /\.css$/,
//           use: ['vue-style-loader', 'css-loader'],
//         },
//       ]
//   }

//   return rules;
// }

// function getDevtool() {
//   let type = ''
//   if (process.env.NODE_ENV === 'development') {
//     type = '#source-map';
//   }

//   return type;
// }

// function getPlugins() {
//   let plugins = [
//     new CleanWebpackPlugin(),
//     new VueLoaderPlugin(),
//     new CopyWebpackPlugin([
//       {
//         from: rootPath + '/packages',
//         to: distPath + '/packages',
//       },
//       {
//         from: rootPath + '/scripts',
//         to: distPath + '/scripts',
//       },
//       {
//         from: rootPath + '/package.json',
//         to: distPath + '/package.json',
//       }
//     ]),
//   ];

//   return plugins;
// }

// let config = {};

// config.mode = getMode();

// config.entry = getEntry();

// config.output = getOutput();

// config.module = getModule();

// config.resolve = getResolve();

// config.devtool = getDevtool();

// config.plugins = getPlugins();


// module.exports = config;