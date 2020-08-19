const http = require('http');
const fs = require("fs")

const filContent = fs.readFileSync('tut21.html')



const server = http.createServer((req, res) => {
  
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end(filContent);
});

server.listen(80,'127.0.0.1', () => {
  console.log(`listening on port 80`);
});