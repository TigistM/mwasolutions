const express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();

//app.use(cors());

//Grade class
//********************************/
class Grade {
    constructor(id, name, course, grade) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.grade = grade;
    }
}
var grades = []; // Array Structure

//********************************/

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(validator());

//port number
var port = 2020;


var router = express.Router(); 

// middleware 
router.use(function (req, res, next) {
   
    console.log('Logging...');
    return next(); 
});

router.get('/', function (req, res) {
    res.json({ message: 'Welcome to my first API' });

});


// on routes that end in /grades
// ----------------------------------------------------
router.route('/grades')
    .post((req, resp) => {
        var errors = [];
      
        req.assert('name', 'name can not be empty!').notEmpty();
        req.assert('course', 'course can not be empty!').notEmpty();
        req.assert('grade', 'grade can not be empty!').notEmpty();
        var errors = req.validationErrors();
        if (errors) resp.json({ message: errors });
        else {
            var name = req.body.name;
            var course = req.body.course;
            var grade = req.body.grade;
            var newgrade = new Grade(grades.length+1, name, course, grade);
            grades.push(newgrade);
            resp.json(grades);
        }

    })
    .get((req, resp) => {
       
        if (grades.length == 0)
            resp.send(new Error());
        resp.json(grades);
    })
//**********************************************/
//for /grades/:id

router.route('/grades/:id')
    .get((req, resp) => {
       
        const grade =grades.find(g=> g.id==req.params.id);

        if (!grade) resp.send(new Error('No grade with such id'));

        resp.json(grade);
    })
    .put((req, resp) => {

        const grade =grades.find(g=> g.id==req.params.id);

        if (!grade) resp.send(new Error('ID not found!'));

        grade.name = name;
        grade.course = course;
        grade.grade = grade;
        resp.json(grades);
    })
    .delete((req, resp) => {
        
        const grade =grades.find(g=> g.id==req.params.id);

        if (!grade) resp.send(new Error('ID not found!'));
        grades.pop(grade);
        resp.json(grades);
    });


//*******************************/
app.use('/api', router);

// Listener
// =============================================================================
app.listen(port, function () {
    console.log('Server Running on: ' + port);
    console.log('Loading...');
    var grade1 = new Grade('1', 'Tigist Mengesha', 'MWA', '98');
    var grade2 = new Grade('2', 'Seble Tadesse', 'WAA', '92');
    var grade3 = new Grade('3', 'Bisrat Tadesse', 'WAA', '90');
 
    grades.push(grade1);
    grades.push(grade2);
    grades.push(grade3);

});
