const http = require('http')
//http package came pre with node

//createServer is a method that returns an instance
const server = http.createServer((req, res)=>{
    res.end('Hello Server')
})

//to run server
//Port : Entry/exit point for data
server.listen(3000)