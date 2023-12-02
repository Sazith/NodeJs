
// HTTP Module
const http = require('http');
const serer = http.createServer((request,response)=>{
    if(request.url === '/'){
        response.write('Hello World');
        response.end();
    }
});
serer.listen(8000); // 8000 => Port Number