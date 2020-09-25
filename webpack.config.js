const path = require('path');

module.exports = {

    entry: './mainScreen/generator.ts',
    devtool: 'inline-smainScreenource-map',
    devServer: {
        publicPath : '/dist/',
        contentBase: './mainScreen',
        index: './mainScreen/humanitariumIssues.html',
        openPage: '/humanitariumIssues.html',
        
    },
    module : {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

};