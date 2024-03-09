const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer();

server.on("request", function(req, res){
    const url = req.url;
    const method = req.method;
    const fpath = path.join(__dirname, "../", "animals-ui", url);
    content = '<h1>404 Not Found</h1>'
    fs.readFile(fpath, function(err, dataStr) {
        if (err) {
            return res.end(content);
        }
        res.end(dataStr);
    });
});

server.listen(8080, function(){
    console.log("server running at http://localhost:8080");
})