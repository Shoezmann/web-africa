const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    externals: {
        'react': 'React',
    },
    devServer: {
        port: 3100,
        historyApiFallback: true,
        liveReload: true
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                exclude: /(node_modules)/,
                use: ['file-loader?name=[name].[ext]'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
}