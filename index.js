const http = require("http")
const app = http.createServer(function(req,res){
    res.end("Hello World 2!")
}).listen(3000)
 