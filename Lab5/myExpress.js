const axios=require('axios');
const express=require('express');
const {from}=require('rxjs');
const {map}=require('rxjs/operators');



var app = express();
var result;
const port =1717;



app.set('trust proxy',true);
app.set('strict routing',true);
app.enable('case sensetive routing');
app.set('x-powered-by',false);



// 1.Using Promise
   app.get('/users',(req,resp)=>{
        axios.get('http://jsonplaceholder.typicode.com/users/')   
             .then((data)=>{result=data.data;})
             .catch((err)=>console.log(err));
        resp.status(200);
        resp.set('Content-Type','application/json');
        resp.send(result);
        resp.end();
    });

//2.Using Observable
// app.get('/users',(req,resp)=>{
//     from(axios.get('http://jsonplaceholder.typicode.com/users/'))
//         .pipe(
//             map((response)=>response.data)
//         )
//         .subscribe((data)=>{
//             resp.status(200);
//             resp.set('Content-Type','application/json');
//             resp.send(data);
//             resp.end();
//         })
// })

// 3. Using Async/Await
    // async function consume(){
    //     try{
    //         result = await axios.get('http://jsonplaceholder.typicode.com/users/') ;
    //         result = result.data;
    //     }
    //      catch(err){
    //         console.log(err);
    //     }
    // }
    // app.get('/users',(req,resp)=>{
    //     consume();
    //     resp.status(200);
    //     resp.set('Content-Type','application/json');
    //     resp.send(result);
    //     resp.end();
    // })


app.listen(port,()=>console.log('Server is Running on PORT '+port));
