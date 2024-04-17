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

// 查询宠物收养信息
exports.findAdopt = (req, res) => {
    const adoptData = req.body;
    let sql = 'SELECT * FROM pet_adoption WHERE pet_id = ?';
    db.query(sql, adoptData.pet_id, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.length === 0) {
            return res.cc('未找到对应的宠物信息');
        }
        const petInfo = result[0];
        return res.json({
            message: '查询成功',
            data: petInfo
        });
    });
};

// 更改宠物收养信息（宠物类型）
exports.updatePetType = (req, res) => {
    const adoptData = req.body;
    let sql = 'UPDATE pet_adoption SET pet_type = ? WHERE pet_id = ?';
    db.query(sql, [adoptData.pet_type, adoptData.pet_id], (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未找到要更新的宠物信息');
        }
        return res.cc('宠物类型更新成功', 0);
    });
};

// 更改宠物收养信息（宠物照片）
exports.updatePetPhoto = (req, res) => {
    const adoptData = req.body;
    let sql = 'UPDATE pet_adoption SET pet_photo_url = ? WHERE pet_id = ?';
    db.query(sql, [adoptData.pet_photo_url, adoptData.pet_id], (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未找到要更新的宠物信息');
        }
        return res.cc('宠物照片更新成功', 0);
    });
};

// 更改宠物收养信息（宠物描述）
exports.updatePetDescription = (req, res) => {
    const adoptData = req.body;
    let sql = 'UPDATE pet_adoption SET pet_description = ? WHERE pet_id = ?';
    db.query(sql, [adoptData.pet_description, adoptData.pet_id], (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未找到要更新的宠物信息');
        }
        return res.cc('宠物描述更新成功', 0);
    });
};

// 更改宠物收养信息（联系方式）
exports.updatePetContact = (req, res) => {
    const adoptData = req.body;
    let sql = 'UPDATE pet_adoption SET contact_info = ? WHERE pet_id = ?';
    db.query(sql, [adoptData.contact_info, adoptData.pet_id], (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未找到要更新的宠物信息');
        }
        return res.cc('联系方式更新成功', 0);
    });
};

// 更改宠物收养信息（宠物地址）
exports.updatePetLocation = (req, res) => {
    const adoptData = req.body;
    let sql = 'UPDATE pet_adoption SET pet_location = ? WHERE pet_id = ?';
    db.query(sql, [adoptData.pet_location, adoptData.pet_id], (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未找到要更新的宠物信息');
        }
        return res.cc('宠物地址更新成功', 0);
    });
};