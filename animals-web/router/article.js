const express = require("express");
const article_handler = require("../router_handler/article");

const router = express.Router();

// 新增文章
router.post("/new", article_handler.newArt);

// 删除文章
router.post("/delete", article_handler.deleteArt);

// 查询文章
router.post("/find", article_handler.findArt);

// 更新文章（标题）
router.post("/updata-title", article_handler.updateArtTitle);

// 更新文章（内容）
router.post("/updata-content", article_handler.updateArtContent);

module.exports = router;