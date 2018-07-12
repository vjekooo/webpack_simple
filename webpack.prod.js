
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:  [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new MiniCssExtractPlugin({
            filename: 'style/[name]-[contenthash].css'
        })
    ]
})