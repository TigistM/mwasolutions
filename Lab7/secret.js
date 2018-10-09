const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

var router = express.Router(); 
var port = 1010;
var crypto = require('crypto');

router.route('/secret')
.get((req,res)=>{

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/secret',{ useNewUrlParser: true },(err,client)=>{

    if(err) throw err;
    const db = client.db('secret');

    //find the document in the collection
    db.collection('homework7').findOne({},function(err,doc){
        if(err) throw err;

        //console.log(doc);

        var mykey = crypto.createDecipher('aes256', 'asaadsaad');
        var mystr = mykey.update(doc.message, 'hex', 'utf8');
       // mystr += mykey.update.final('utf8');
        mystr += mykey.final('utf8');
        console.log(mystr); //descripted msg

        res.send(mystr);
        client.close();
    })
});
});

app.use('/api', router);
app.listen(port);
console.log('Server listening on PORT: ' + port);