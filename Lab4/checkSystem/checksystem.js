const os = require('os');
const {of} = require('rxjs');
const {filter} = require('rxjs/operators');


var numberOfCores = os.cpus().length;
var totalMemory = os.totalmem();

var obj = {
    'cpucore' : numberOfCores,
    'memory' : totalMemory
};

of(obj).pipe(
    filter((x) => x.cpucore < 2),
    filter((y) => y.memory < 4e9)
)
.subscribe(
    (x,y) => {
        if(x){
            console.log("Processor is not supported!");
        }else if(y){
            console.log("This app needs at least 4 GB of RAM");
        }
        else{
            console.log("System is checked successfully!")
        }
    }
)

// var myPromise = new Promise(function(resolve, reject){
//     if(numberOfCores < 2){
//         reject("Processor is not supported!!!");
//     }
//     else if(totalMemory < 4e9){
//         reject("The app needs at least 4GB of RAM!!!")
//     }
//     else{
//         resolve("System checked successfully!!!");
//     }
// });

// var checkSystem = function(){
//     myPromise.then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// };
// checkSystem();
// console.log("Checking the system...");

