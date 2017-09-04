var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [
            '.jsx', '.js', '.web', '.webpack.js', '.json'
        ]
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
            {test: /\.(png|gif|jpg|jpeg|bmp)$/i, exclude: /node_modules/, loader: 'url-loader?limit=5000'},
            {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, exclude: /node_modules/, loader: 'url-loader?limit=5000'},
            {enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader'}
        ]
    },
    plugins: [
        require('autoprefixer'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};