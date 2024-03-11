const express = require("express");

const app = express();

app.use(express.static("../animals-ui"));

app.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
})