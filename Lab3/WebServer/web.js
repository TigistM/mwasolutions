var server = require('http');
var fs = require('fs');

server.createServer(function(req,res)
{
   // res.writeHead(200,{'Content-Type':'text/plain'});
    //res.end('Hi! My name is Tigist and this is my first new web server.');
    // creating the 200MB file
    /*
    const file = fs.createWriteStream('./tigist.file');
    for(let i=0; i<= 1e6; i++) {
     file.write('Hi CS572 ! My name is Tigist and this is my first new web server.\n Hi! My name is Tigist and this is my first new web server.\n Hi! My name is Tigist and this is my first new web server.\n Hi! My name is Tigist and this is my first new web server.');
    }
    file.end();
    */

// using readFile : This is Asyncronous hence non blocking. Even though it is high memory consumption because the entire file is read 
// in to memory before it was sent as a reponse, it still does not block. Hence it goes to next step.

//*************************/
/*
    fs.readFile('./tigist.file', (err, data) => {
    if (err) throw err;
    res.end(data);
    });
*/
//*************************/

//using readfileSync
// This is Synchronus which means it blocks until it reads entire file from memory after loading. 
//This is also high memory consumption.
//*************************/
/*
    var data = fs.readFileSync('./tigist.file'); 
    res.end(data);
*/
//*************************/

//using Stream: the memory usage is max 25MB no matter how big the file. 
//this is because stream never loads the whole file on memory, it reads in chuncks at a time.
//
//*************************/
const src = fs.createReadStream('./tigist.file');
src.pipe(res);
//*************************/
}).listen(1717,'127.0.0.1');

