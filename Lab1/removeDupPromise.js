// remove duplicate using function that accepts an array
function removeDups(myArray){
		return myArray.filter((item, index, arr) => {
			return arr.indexOf(item) == index;
		});
	}

//adding the method to Array prototype using promise
Object.defineProperty(Array.prototype,'removeDupPromise',{ enumerable: false, value:function(){
		return new Promise((resolve, reject) => {
			resolve(removeDups(this));
		});
	}}); 
    
    x=['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl'];
    
    x.removeDupsPromise().then(data => console.log(data));
    
// remove duplicate using async await and adding the method to array prototype
    Object.defineProperty(Array.prototype,'removeDupsAsyncWait',{ enumerable: false, value: async function(){
		try{
			let filteredArr = await this.removeDupPromise();
			console.log(filteredArr);
		}catch(error){
			console.log(error);
		}
	}
    });

x.removeDupsAsyncWait();
	console.log('Finish');