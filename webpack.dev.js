const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].[hash].js',
    },
    module: {
        rules: []
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        port: port
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})