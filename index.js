const http=require('http');
const URL=require('url');

const server=http.createServer(function (req,res) {
    const myURL="http://rabbil.com/blog.html?year=2020&month=july";
    const myURLObj= URL.parse(myURL,true);

    const myHostName=myURLObj.host;
    const myPathName=myURLObj.pathname;
    const mySearchName=myURLObj.search;

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(myHostName);
    res.end();
});

server.listen(5050);
console.log("Server Run Success");