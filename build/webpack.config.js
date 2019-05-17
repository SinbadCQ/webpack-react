const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 内置优化
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {//ES6、JSX处理
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                options: {
                    presets: ['es2015', 'react']
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, '../src/assets'),
        // 启用gzip压缩所有服务
        compress: true,
        host: '0.0.0.0',
        port: 9000,
        // 模块热替换
        hot: true,
        // 显示进度条
        progress: true,
        // 打开默认浏览器
        open: false,
        // 允许使用本地ip地址打开
        useLocalIp: true
    }
}
