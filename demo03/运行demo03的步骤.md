1 ��װreact

> npm install react --save

2 ��װreact-dom

> npm install react-dom --save

3 ��װbabel����������webpack�Զ�ת��jsx
> npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev

4 ��webpact.config.js��module��loaders��������Ӧ����

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
5 ����pack����
> webpack-dev-server

6 ���ʶ˿�
http://127.0.0.1:8080/