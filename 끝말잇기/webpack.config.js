const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval', //빠르게 한다는 뜻
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./client'],
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [ '@babel/preset-env','@babel/preset-react'],
                plugins: [ '@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), //__dirname이 현재 폴더라는 뜻
        filename: 'app.js'

    }, //출력

};