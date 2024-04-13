const express = require("express");
const user_handler = require("../router_handler/adopt");

const router = express.Router();

// 新建宠物收养信息
router.post("/new", user_handler.newAdopt);

// 删除宠物收养信息
router.post("/delete", user_handler.delAdopt);

module.exports = router;