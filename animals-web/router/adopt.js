const express = require("express");
const user_handler = require("../router_handler/adopt");

const router = express.Router();

// 新建宠物收养信息
router.post("/new", user_handler.newAdopt);

// 删除宠物收养信息
router.post("/delete", user_handler.delAdopt);

// 查询宠物收养信息
router.post("/find", user_handler.findAdopt);

// 更改宠物收养信息（宠物类型）
router.post("/updata-type", user_handler.updatePetType);

// 更改宠物收养信息（宠物照片）
router.post("/updata-photo", user_handler.updatePetPhoto);

// 更改宠物收养信息（宠物描述）
router.post("/updata-description", user_handler.updatePetDescription);

// 更改宠物收养信息（联系方式）
router.post("/updata-contact", user_handler.updatePetContact);

// 更改宠物收养信息（宠物地址）
router.post("/updata-location", user_handler.updatePetLocation);

module.exports = router;