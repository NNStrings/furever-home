const db = require("../db/index");

exports.getUserInfo = (req, res) => {
    const sqlStr = `select id, username, userpic, status from users where id=?`;
    db.query(sqlStr, req.user.id, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.length !== 1) {
            return res.cc('用户信息获取失败');
        }
        return res.send({
            status: 0,
            message: '获取用户信息成功',
            data: result[0]
        });
    });
}

exports.updataPassword = (req, res) => {
    res.send('ok');
}