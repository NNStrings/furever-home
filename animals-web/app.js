const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user");

// 服务器对象实例
const app = express();

// 配置 cors 中间件，支持跨域
app.use(cors());

// 配置解析表单数据的中间件：application/x-www-form-urlencoded 格式
app.use(express.urlencoded({extended: false}));

// 用户路由模块
app.use("/api" ,userRouter);

app.listen(80, () => {
    console.log("api server is running at http://127.0.0.1");
})