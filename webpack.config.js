'use strict';

const webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var px2rem = require('postcss-px2rem');

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./js/app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].bundle.js",
        publicPath: '/dist/',
        library: 'App'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader?limit=10000&name=[path][name].[ext]"]
            }
            // Loaders for other file types can go here
        ]
    },
    "plugins": [
        new CopyWebpackPlugin([{
            from: __dirname + '/src/js/lib',
            to: __dirname + '/dist/js/lib'
        }]),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [px2rem({remUnit: 75})];
                }
            }
        })
    ]
};