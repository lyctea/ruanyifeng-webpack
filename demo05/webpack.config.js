module.exports = {
    entry: './main.js',
    outout: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};