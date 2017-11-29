const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //将less解析css到文件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//只打包依赖

const extractLess = new ExtractTextPlugin({
	filename: "../style/[name].css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		index : './src/script/index.js',
		vendor: ['react','react-dom']
	},
	output: {
		path: path.resolve(__dirname,'build/script'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				include: [
					path.resolve(__dirname,'src/script')
				],
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				use: extractLess.extract({ //不使用则内联至文件中把样式
					use: [{
						loader: "css-loader" //translates CSS into CommonJS
					},{
						loader: "less-loader" //compiles Less to CSS
					}],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractLess,
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor","runtime"]
			// minChunks: function(module) {
			// 	return module.context && module.context.indexOf()
			// }
		}),
		new UglifyJSPlugin()

	],
	// externals: {// 全局引入不打包编译
	// 	'react': 'React',
	// 	'react-dom': 'ReactDOM'
	// }
};