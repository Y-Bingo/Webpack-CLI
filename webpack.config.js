const path = require( 'path' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    // development devtool: "cheap-module-eval-source-map"
    // production devtool: "cheap-module-source-map"
    entry: {
        main: "./src/index.js",
        sub: "./src/index.js"
    },
    devServer: {
        contentBase: "./bin",
        open: true,
        port: 9334
    },
    module: {
        rules: [
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
                    {
                        loader: "style-loader"  // 将JS字符串申城style 节点
                    },
                    {
                        loader: "css-loader",   // 将css转化成CommonJS模块
                        options: {
                            // importLoader: 1,
                            // modules: true
                        }
                    },
                    {
                        loader: "sass-loader"   // 将sass编译成CSS
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin( {
            template: path.resolve( __dirname, "template/index.html" )
        } ),
    ],
    output: {
        publicPath: "/",
        filename: "[name].bundle.js",
        path: path.resolve( __dirname, "bin" )
    },
}