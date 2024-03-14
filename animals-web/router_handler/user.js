// 导入数据库
const db = require("../db/index");
// 导入 bcryptjs
const bcryptjs = require("bcryptjs");

// 注册
exports.regUser = (req, res) => {
    const userinfo = req.body;
    // 对表单数据进行合法性校验
    if (!userinfo.username || !userinfo.password) {
        return res.send({status: 1, message: '用户名或密码不合法'});
    }
    // 重名检测
    let sql_str = 'select * from users where username=?';
    db.query(sql_str, userinfo.username, (err, result) => {
        if (err) {
            return res.send({status: 1, message: err.message});
        }
        if (result.length > 0) {
            return res.send({status: 1, message: '用户名已被占用'});
        }
    });
    // 密码加密
    userinfo.password = bcryptjs.hashSync(userinfo.password, 10);
    // 插入新用户
    sql_str = 'insert into users set ?';
    db.query(sql_str, {username: userinfo.username, password: userinfo.password}, (err, result) => {
        if (err) {
            return res.send({status: 1, message: err.message});
        }
        if (result.affecetedRow !== 1) {
            return res.send({status: 1, message: '未知错误，注册失败，请稍后再试'});
        }
        res.send({status: 0, message: '注册成功'});
    });
}

// 登录
exports.login = (req, res) => {
    res.send("login OK");
}