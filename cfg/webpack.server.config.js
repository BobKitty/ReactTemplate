const path = require('path'); // создаем относительный путь в абослютный

const nodeExternals = require('webpack-node-externals'); // пакет который отключает лишние модули для сервера

const NODE_ENV = process.env.NODE_ENV; // не понял что это но для свойства mode

module.exports = {
    target: 'node', //означает что билд будет подготовлен только для node.js
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'), // берем от сюда
    output: {
        path: path.resolve(__dirname, '../dist/server'), //вставляем сюда
        filename: 'server.js'
    },
    resolve: { // учим webpack читать другие расширения файлов
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // прописываем все расширения тк он перезаписывает дефолтные
    },
    externals: [nodeExternals()],
    module: { // подрубаем модули (обычно это лоадеры)
        rules: [
            { // подрубаем loaders (минимум 2 свойства)
                test: /\.[tj]sx?$/, // регулярка, которая будет чекать какие расширения мы будем обрабатывать (.tsx or .jsx)
                use: ['ts-loader'] // и будем их обрабатывать
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            onlyLocals: true,
                        }
                    },
                    'sass-loader',
                ],
            }
        ]
    },
    optimization: {
        minimize: false,
    }
}