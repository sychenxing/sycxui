const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const {pathUtil} = require('../util');

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: pathUtil.root + '/tests/app/main.js'
    },
    output: {
        path: pathUtil.root + '/tests/app/dist',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: pathUtil.root + '/tests/app/dist',
        open: false,
        hot: true,
        port: 3002,
        inline: true,
        historyApiFallback: {
            rewrites: [{
                from: /.*/g,
                to: pathUtil.root + '/tests/app/dist/index.html'
            }]
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: pathUtil.root + '/tests/app/dist/index.html',
            template: pathUtil.root + '/tests/app/index.html'
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