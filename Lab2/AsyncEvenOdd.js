function EvenNum(arr)
{ 
        return arr.filter(v=>v%2==0);  
}
Array.prototype.Even = function()
{
    setTimeout(()=>{console.log(EvenNum(this))}, 1);
}

function OddNum(arr)
{
    return arr.filter(v=>v%2!=0);
}
Array.prototype.Odd = function()
{
    setTimeout(()=>{console.log(OddNum(this))}, 2);
}


console.log("Start");
[1,2,3,4,5,6,7,8].Even();
[1,2,3,4,5,6,7,8].Odd();
console.log("End");