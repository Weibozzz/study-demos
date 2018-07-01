## next-antd-router-demo
next结合antd按需加载demo

### 运行
```bash
cnpm i 
npm build
npm run dev
//部署
npm run build 
npm start


```
### 按需加载
.babelrc
```js
"plugins": [
    "transform-decorators-legacy",
    [
      "import",
      {
        "libraryName": "antd",
        "style": "less"
      }
    ]
  ]

```
### 加载less
    
```js
/* eslint-disable */
const withLess = require('@zeit/next-less')

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})


```
### 页面引入
```html
import Head from 'next/head'
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title>刘伟波博客</title>
        </Head>
```