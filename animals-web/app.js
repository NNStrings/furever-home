const path = require("path");
const express = require("express");
const cors = require("cors");
const joi = require("joi");
const expressJwt = require("express-jwt");
const config = require("./config");

// 服务器对象实例
const app = express();

app.use(express.static('../animals-ui'));

// 配置 cors 中间件，支持跨域
app.use(cors());

// 配置解析表单数据的中间件：application/x-www-form-urlencoded 格式
app.use(express.urlencoded({extended: false}));

// 封装 res.cc 函数
app.use((req, res, next) => {
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        });
    };
    next();
})

// 在路由之前配置解析 Token 的中间件
app.use(expressJwt({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}));

// 用户路由模块
const userRouter = require("./router/user");
app.use("/api" ,userRouter);

// 用户信息模块
const userinfoRouter = require("./router/userinfo");
app.use("/my", userinfoRouter);

// 宠物文章
const articleRouter = require("./router/article");
app.use("/article", articleRouter);

// 宠物领养
const adoptRouter = require("./router/adopt");
app.use("/adopt", adoptRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    // 身份认证失败的错误
    else if (err.name === 'UnauthorizedError') {
        return res.cc('身份认证失败');
    }
    // 未知错误
    else {
        return res.cc(err);
    }
})

app.listen(80, () => {
    console.log("api server is running at http://127.0.0.1/login.html");
})