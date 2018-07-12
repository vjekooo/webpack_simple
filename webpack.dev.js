
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const port = process.env.PORT || 3000

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:  [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        open: true,
        hot: true,
        port: port
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})