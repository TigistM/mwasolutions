const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

class Book{
    constructor(isbn,author,tags){
        this.isbn = isbn;
        this.author = author;
        this.tags = tags;
        this.student = null;
        this.returnDate = null;
    }
    borrowBook(student,dueDate){
        this.student = student;
        this.returnDate = dueDate;
    }
}

MongoClient.connect(url,{ useNewUrlParser: true }, (err,db)=>{
    if(err) throw err;
    console.log('Connected to library database...');
    var dbo = db.db('library');
    
    var dueDate = new Date(2018,7,2);

    var tags = ['Node JS','Assad','Professor'];

    var book = new Book('11-707','Prof. Assad',tags);

    book.borrowBook('Tigist Mengesha',dueDate);
    var obj = {book:book};

    dbo.collection('books').insertOne(obj,(err,result)=>{
        if(err) throw err;
        console.log('Book is saved successfully!');
        
    });
    dbo.collection('books').findOne({},function(err,result){
        if(err) throw err;

        console.log(result);
    });
    db.close();
});