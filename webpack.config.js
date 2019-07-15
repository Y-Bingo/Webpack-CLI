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
            }
        ]
    }
}