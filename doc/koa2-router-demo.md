# 使用koa2-router-demo
## 获取get和post参数
通过
```
router.post('/post3',  (ctx, next) => {
       console.log(ctx.request.body);//这里即可拿到参数
       ctx.body = ctx.request.body
   })

```
需要注意的是axios请求的时候参数需要序列化,否则传的参数将是一个对象
    
```
var qs = require("qs");

axios({
            method: 'POST',
            url,
            data:qs.stringify(data),
            headers: {"Content-Type": "application/x-www-form-urlencoded",},

        })

```
