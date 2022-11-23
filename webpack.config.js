const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        //directorio que crea al compilar
        path: path.resolve(__dirname, 'dist'),
        //nombre del archivo compilado
        filename: 'bundle.js'
    },
    resolve: {
        //extensiones que maneja webpack
        extensions: ['*','.mjs','.js','.svelte']
    },
    module: {
        //las reglas son para trabajar con los loaders
        rules: [
            {
                //identificar los archivos que vamos a usar
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                } 
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}

