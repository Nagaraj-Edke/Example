var http = require('http')

http.createServer((req,res)=>{

    
    res.end("Hello world");
}).listen(8081);

console.log("hello")

console.log("Server is running at  http://localhost:8081/  **");

