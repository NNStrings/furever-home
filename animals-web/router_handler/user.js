// 导入数据库
const db = require("../db/index");
// 导入 bcryptjs
const bcryptjs = require("bcryptjs");
// 导入生成 Token 的包
const jwt = require("jsonwebtoken");
// 导入全局配置文件
const config = require("../config");

// 注册
exports.regUser = (req, res) => {
    const userinfo = req.body;
    // 重名检测
    let sql_str = 'select * from users where username=?';
    db.query(sql_str, userinfo.username, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.length > 0) {
            return res.cc('用户名已被占用');
        }
    });
    // 密码加密
    userinfo.password = bcryptjs.hashSync(userinfo.password, 10);
    // 插入新用户
    sql_str = 'insert into users set ?';
    db.query(sql_str, {username: userinfo.username, password: userinfo.password}, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affecetedRow !== 1) {
            return res.cc('未知错误，注册失败，请稍后再试');
        }
        res.cc('注册成功', 0);
    });
}

// 登录
exports.login = (req, res) => {
    // 接收表单的数据
    const userinfo = req.body;
    // 定义 SQL 语句
    const sql = `select * from users where username=?`;
    // 查询用户信息
    db.query(sql, userinfo.username, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        // 未查到信息
        if (result.length !== 1) {
            return res.cc('登录失败');
        }
        // 检查密码是否正确
        const compare = bcryptjs.compareSync(userinfo.password, result[0].password);
        if (!compare) {
            return res.cc('登录失败');
        }
        // 生成服务器端的 Token 字符串
        const user = {...result[0], password: '', userpic: null};
        // 对用户信息加密，生成 Token 字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn});
        return res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        });
    });
}