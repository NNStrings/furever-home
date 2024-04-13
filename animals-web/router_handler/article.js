// 导入数据库
const db = require("../db/index");
// 导入全局配置文件
const config = require("../config");

// 新增文章
exports.newArt = (req, res) => {
    const articleData = req.body;
    let sql_str = 'insert into articles set ?';
    db.query(sql_str, {title: articleData.title, content: articleData.content, author: articleData.author}, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows !== 1) {
            return res.cc('未知错误，新建文章失败，请稍后再试');
        }
        return res.cc('新建文章成功', 0);
    });
}

// 删除文章
exports.deleteArt = (req, res) => {
    const articleData = req.body;
    let sql_str = 'DELETE FROM articles WHERE article_id = ?';
    db.query(sql_str, {article_id: articleData.article_id}, (err, result) => {
        if (err) {
            return res.cc(err);
        }
        if (result.affectedRows === 0) {
            return res.cc('未知错误，删除文章失败，请稍后再试');
        }
        return res.cc('文章删除成功', 0);
    });
};
