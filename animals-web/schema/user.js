const joi = require("joi");

// 定义用户名和密码的验证规则

const username = joi.string().alphanum().min(2).max(15).required();
const password = joi.string().pattern(/^[\S]{6,20}$/).required();

// 定义和验证注册和登录表单数据的规则对象

exports.reg_login_schema = {
    body: {
        username,
        password
    }
};

// 定义和验证更新密码的规则对象

exports.updata_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
};