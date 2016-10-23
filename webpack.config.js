var path = require('path');

module.exports = {
    entry: './www/src/main.js',

    output: {
        path: path.join(__dirname, './www/dist'),
        publicPath: 'www/dist/',
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        prgress: true
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },

    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            filer: path.join(__dirname, './www/src/filters'),
            components: path.join(__dirname, './www/src/components')
        }
    },

    devtool: 'eval-source-map'
}