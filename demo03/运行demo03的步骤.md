1 安装react

> npm install react --save

2 安装react-dom

> npm install react-dom --save

3 安装babel相关组件，让webpack自动转换jsx
> npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

4 在webpact.config.js的module的loaders中增加相应配置

```
module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
 }
```
5 开启pack服务
> webpack-dev-server

6 访问端口
http://127.0.0.1:8080/