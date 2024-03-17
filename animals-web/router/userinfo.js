const express = require("express");
const userinfo_handle = require("../router_handler/userinfo");

const router = express.Router();

router.get('/userinfo', userinfo_handle.getUserInfo);

module.exports = router;