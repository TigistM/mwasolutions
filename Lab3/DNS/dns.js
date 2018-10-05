const { Resolver } = require('dns');
const { from } = require ('rxjs');
const resolver = new Resolver();
function showIP()
{
 resolver.resolve4("www.mum.edu", (err, addresses, family)=>{console.log(addresses)});
}

console.log("1. Using Callback...");
showIP();

//using Promise


console.log("2. Using Promise...");
function showIP_Promise()
{
  return new Promise((resolve,reject)=>{
    resolver.resolve4("www.mum.edu", (err, addresses, family)=>{
        resolve(addresses);
        reject(new Error(" error retriving IP"))
    });
  });
}
const p = showIP_Promise();
p.then((result)=>{console.log(result)}).catch((err)=>{console.log(err.message)});

console.log("3. using Async/Await");

async function showIP_AsyncAwait()
{
    try{
        const showIPAdd = await showIP_Promise();
        console.log(showIPAdd);
    }catch(err)
    {
        console.log(err.message)
    }
}
showIP_AsyncAwait();

//using Obeservables
console.log("4. using Observables");

 function showIPObservables()
{
		//const { from } = rxjs;
		//const { Resolver, resolve4 } = require('rxjs.operators');
		from(showIP_Promise())
			.subscribe(
				data => console.log(data)
			)
}
showIPObservables();




