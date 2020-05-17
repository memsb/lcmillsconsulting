const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                } 
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader, // instead of style-loader
                  'css-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
          patterns: [
            { from: 'src/img', to: 'img' }
          ]
        }), 
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        port: 9001
    }
}