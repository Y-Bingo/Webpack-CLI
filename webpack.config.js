const path = require( 'path' );

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "bin" )
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
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader"   // 将sass编译成CSS
                    }
                ]
            }
        ]
    }
}