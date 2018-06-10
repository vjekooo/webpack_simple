const path = require('path')
const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: [`${commonPaths.appEntry}/js/index.js`]
    },
    output: {
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
				test: /\.(gif|png|jpe?g|svg)$/i,
				include: `${commonPaths.appEntry}/assets/images`,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 70
							},
							optipng: {
								optimizationLevel: 7
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							}
						}
					}
				]
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Naslov',
            template: './src/index.html'
        })
    ]
}