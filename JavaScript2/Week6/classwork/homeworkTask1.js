//1.1

	function threeFive(stVal, endVal, cbDiv3, cbDiv5){
		
		let arr = [];
		
		for (let i = stVal; i <= endVal; i++){
			arr.push(i);
		}
		
		arr.forEach(i => {
			if (i % 3 === 0) cbDiv3(i);
			if (i % 5 === 0) cbDiv5(i);
		});
		
	}
	
	threeFive(10, 15, (e)=>{
		console.log(", DivThree: " + e);
	}, (e)=>{
		console.log(", DivFive: " + e);
	});
	