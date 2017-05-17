'use strict';
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var plugins = null;
const buildEventName = process.env.npm_lifecycle_event
if (buildEventName === 'buil') {
    
    plugins = [
        new CopyWebpackPlugin([{
            from: __dirname + '/src/js/lib',
            to: __dirname + '/dist/js/lib'
        },{
            from: __dirname + '/src/misc',
            to: __dirname + '/dist/misc'
        }]),
        new HtmlWebpackPlugin({
            template: './index.html',
            inlineSource: '.(css|js)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new ExtractTextPlugin("css/styles.css")
    ];
} else {
    plugins = [
        new CopyWebpackPlugin([{
            from: __dirname + '/src/js/lib',
            to: __dirname + '/dist/js/lib'
        },{
            from: __dirname + '/src/misc',
            to: __dirname + '/dist/misc'
        }]),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin("css/styles.css")
    ];
}
module.exports = {
    context: path.join(__dirname , "/src"),
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss", "sass-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader?limit=10000&name=[path][name].[ext]?v=[hash]"]
            },
             {
                test: /\.tpl$/,
                use: ["art-template"]
            }
            // Loaders for other file types can go here
        ]
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9100
    },
    plugins: plugins
};
