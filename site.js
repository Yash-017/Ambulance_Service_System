const http = require('http');
const fs=require('fs')
const port = process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
   
    res.setHeader('Content-Type','text/html')
    
    
    if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('indexx.ejs')
        res.end(data.toString())
    }
 
    else if(req.url=='/signup'){
        res.statusCode=200;
        const data=fs.readFileSync('signup.html')
        res.end(data.toString())
    }
    else{
    res.statusCode=200;
    res.end('<h1> This is Default Page</h1>');
    }

})

server.listen(port,()=>{
    console.log('Server is listening on port ${port}');
});