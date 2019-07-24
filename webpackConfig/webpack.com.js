const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {
    entry: {
        main: path.resolve( process.cwd(), "src/index.js" )
    },
    output: {
        publicPath: './',
        filename: '[name].[hash].js',
        chunkFilename: '[name].js',
        path: path.resolve( process.cwd(), 'bin' )
    },
    // development devtool: "cheap-module-eval-source-map"
    // production devtool: "cheap-module-source-map"
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,        // 忽略 该文件夹
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: 2, // 声明corejs版本
                                useBuiltIns: "usage"
                            }
                        ],
                    ]
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // placeholder 占位符
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 10240
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",  // 将JS字符串申城style 节点
                    "css-loader",   // 将css转化成CommonJS模块
                    "sass-loader"   // 将sass编译成CSS
                ]
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin( {
            verbose: true,
        } ),
        new HtmlWebpackPlugin( {
            template: "./template/index.html"
        } )
    ],
}