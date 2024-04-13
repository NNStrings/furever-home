// 导入数据库
const db = require("../db/index");
// 导入全局配置文件
const config = require("../config");

// 新建宠物收养信息
exports.newAdopt = (req, res) => {
    const adoptData = req.body;
    let sql_str = 'insert into pet_adoption set ?';
    db.query(sql_str, {pet_type: adoptData.pet_type, pet_photo_url: adoptData.pet_photo_url, 
                       pet_description: adoptData.pet_description, contact_info: adoptData.contact_info, 
                       pet_location: adoptData.pet_location}, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows !== 1) {
            return res.cc('未知错误，新建宠物收养信息失败，请稍后再试');
        }
        return res.cc('新建宠物收养信息成功', 0);
    });
}

// 删除宠物收养信息
exports.delAdopt = (req, res) => {
    const adoptData = req.body;
    let sql_str = 'DELETE FROM pet_adoption WHERE pet_id = ?';
    db.query(sql_str, {pet_id: adoptData.pet_id}, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未知错误，删除宠物收养信息失败，请稍后再试');
        }
        return res.cc('宠物收养信息删除成功', 0);
    });
};
