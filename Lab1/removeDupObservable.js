Array.prototype.removeDupObservable = function()
{
		const { from } = rxjs;
		const { distinct, reduce } = rxjs.operators;
		from(this)
			.pipe(
				distinct(),
				reduce(
					(newArr,orgArr) => {
						newArr.push(orgArr);
						return newArr;
					},[]),
			)
			.subscribe(
				data => console.log(data),
				null,
				() => console.log("Done!")
			)
    }
    var x=['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']; 
    x.removeDupObservable();