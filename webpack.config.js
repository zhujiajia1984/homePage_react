// const
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// setting
module.exports = {
    entry: {
        main: ['./src/index.js'],
        vendor: ['react', 'react-dom', 'react-router-dom', 'whatwg-fetch']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist")],
        port: 18301,
        historyApiFallback: true,
    },
    devtool: 'source-map', // source-map
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: {
                                '@primary-color': '#1aad19',
                            }
                        }
                    }
                ]
            })
        }, ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '智启云平台',
            template: './src/html/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),
    ]
}