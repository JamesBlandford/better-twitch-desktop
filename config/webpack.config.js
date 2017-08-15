const path = require('path');
const webpack = require('webpack');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: './src/main.ts',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
            }
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ],
    output: {
        filename: '[name].js',
        library: 'ffz-desktop',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        path: path.resolve(__dirname, '../build')
    }
}