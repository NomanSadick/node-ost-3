const http=require('http');
// const URL=require('url');
const fs = require('fs');

const server=http.createServer(function (req,res) {
    // asy 
    // if (req.url == '/') {
    //     const myData = fs.readFileSync('index.html')
    //     res.writeHead(200, {'Content-Type': 'text'})
    //     res.write(myData);
    //     res.end();
    // }

    // asy write
    // if (req.url == '/') {
    //     fs.writeFile('demo.txt','Hello World!', function (err) {
    //         if (err) {
    //             res.writeHead(200, {'Content-Type':'text'})
    //             res.write("File Write fail");
    //             res.end();
    //         } else {
    //             res.writeHead(200, {'Content-Type': 'text'})
    //             res.write("File Write Successfully!");
    //             res.end();
    //         }
    //     });
    // }

    // sync write 
    // if (req.url == '/') {
    //     let err = fs.writeFileSync('demoSync.txt','Hello World!');
    //         if (err) {
    //             res.writeHead(200, {'Content-Type':'text'})
    //             res.write("File Write fail");
    //             res.end();
    //         } else {
    //             res.writeHead(200, {'Content-Type': 'text'})
    //             res.write("File Write Successfully!");
    //             res.end();
    //         }
    // }

    // asy rename 
    // if (req.url == '/') {
    //     fs.rename('demo.txt', 'demoNew.txt', function (err){
    //         if (err) {
    //             res.writeHead(200, {'Content-Type':'text'})
    //             res.write("File Rename fail");
    //             res.end();
    //             } else {
    //                 res.writeHead(200, {'Content-Type': 'text'})
    //                 res.write("File Rename Successfully!");
    //                 res.end();
    //         }
    //     })
    // }

    // asy delete 
    if (req.url == '/') {
        fs.unlink('demoNew.txt',function (err){
            if (err) {
                res.writeHead(200, {'Content-Type':'text'})
                res.write("File Rename fail");
                res.end();
            }else {
                res.writeHead(200, {'Content-Type': 'text'})
                res.write("File Rename Successfully!");
                res.end();
            }
        })
    }
});


server.listen(3000);
console.log("Server Run Success");