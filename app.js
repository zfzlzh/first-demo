//导入路由器
const bodyParser=require('body-parser');
const express=require('express');
const user=require('./candy/routes/user.js');
const index=require('./candy/routes/index.js');
const details=require('./candy/routes/details.js');
//创建web服务器
var app=express();
app.listen (3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended:false
}));
//托管静态文件到public
app.use(express.static('candy'));

//把路由挂载到/user下
//访问路由/user/login...
app.use('/user',user);
app.use('/index',index);
app.use('/details',details);
