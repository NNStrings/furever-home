const express = require("express");
const article_handler = require("../router_handler/article");

const router = express.Router();

// 新增文章
router.post("/new", article_handler.newArt);

// 删除文章
router.post("/delete", article_handler.deleteArt);

module.exports = router;