const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src")
                ],
                options: {
                    presets: ["es2015", "react", "stage-0"]
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, '/asset'),
        compress: true,
        host: 'localhost',
        port: 9000
    }
}