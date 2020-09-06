const path = require('path'); // создаем относительный путь в абослютный
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV; // не понял что это но для свойства mode
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

module.exports = {
    resolve: { // учим webpack читать другие расширения файлов
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // прописываем все расширения тк он перезаписывает дефолтные
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',// настраиваем mode из-за warning 'production' or 'development'
    entry: [ // скажем webpack откуда начинать
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
    ],
    output: { // пропишем куда это все будет складывать
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: { // подрубаем модули (обычно это лоадеры)
        rules: [ // подрубаем loaders (минимум 2 свойства)
            {
                test: /\.[tj]sx?$/, // регулярка, которая будет чекать какие расширения мы будем обрабатывать (.tsx or .jsx)
                use: ['ts-loader'], // и будем их обрабатывать
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        },
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
        ]
        : [],
}