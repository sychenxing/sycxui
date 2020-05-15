const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const {pathUtil} = require('../util');

function getMode(){
    let mode = process.env.NODE_ENV;
    return mode;
}

 console.log(pathUtil().root + '/test/app/dist/index.html');

module.exports = merge(webpackBaseConfig, {
    mode: getMode(),
    devtool: 'eval-source-map',
    entry: {
        main: pathUtil().root + '/test/app/main.js'
    },
    output: {
        path: pathUtil().root + '/test/app/dist',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: pathUtil().root + '/test/app/dist',
        open: false,
        hot: true,
        port: 3002,
        inline: true,
        historyApiFallback: {
            rewrites: [{
                from: /.*/g,
                to: pathUtil().root + '/test/app/dist/index.html'
            }]
        }
    },
    resolve: {
        alias: {
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: pathUtil().root + '/test/app/dist/index.html',
            template: pathUtil().root + '/test/app/index.html'
        }),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            name: 'common'
        }
    }
})