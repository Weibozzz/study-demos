## next-demo
结合redux和next.js服务端渲染简单demo，异步获取数据，开启gizp

### 运行
```bash
cnpm i 
npm build
npm run dev
//部署
npm run build 
npm start


```
### 开启gzip
```js
const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'


    const server = express()

    if (!dev) {
      server.use(compression()) //gzip
    }

```
服务端渲染简单
    
```js
 static async getInitialProps ({ reduxStore, req}) {
    const isServer = !!req
    const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
    const blogDataJson = await blogData.json()
    reduxStore.dispatch(serverRenderClock(isServer))
    reduxStore.dispatch(serverRenderIncrementCount(isServer,blogDataJson))

    return {}
  }

```