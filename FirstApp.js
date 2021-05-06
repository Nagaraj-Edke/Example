var http = require('http')

http.createServer((req,res)=>{

    res.write("HEADER\n")
    
    res.end("Hello world");
}).listen(8081)

console.log("Server is running at  http://localhost:8081/  **");