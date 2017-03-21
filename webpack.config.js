'use strict';

const webpack = require("webpack");

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./app.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        publicPath: '/dist',
        library: 'myClassName',
    },
    devServer: {
        contentBase: __dirname + "/src", // New
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader","postcss-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader?limit=10000&name=[path][name].[ext]"],
            },
            // Loaders for other file types can go here
        ],
    }
};