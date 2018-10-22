//Events and callbacks

    //https://developer.mozilla.org/en-US/docs/Web/API/Event


//Callbacks

    //alias: event handler

    //callbacks are just functions, that you write.

    //Examples
	
		//The function you give to filter, map methods.
		//Button is clicked.
		//Mouse is moving over a image.
		//Some code you wnat to run 3 seconds from now.

		
//Exercises

    // 1. Create a button with title "Count up". When the button is clicked first time, it should first log //      out 0. Next time 2, next time 3, and so on.
    
    // 2. Create a button with title "Log in 3 seconds". When it is clicked it should wait 3 seconds and 
    //      then print the text "Log in 3 seconds". Google which built-in function you need for this.

    // 3. Create a handler, that prints the x,y coordinate of the mouse event.


	
//solution 1

    //<button id="button1" >Count up</button>

	let counter = 0;
			
	document.querySelector("#button1").addEventListener("click", 

		function(){
			
			console.log(counter);
			counter++;
		}

    ); 
    

//solution 2

    //<button id="button2" >Log in 3 seconds</button>
			
	document.querySelector("#button2").addEventListener("click", 

		function(){
			
			const callbackFunction = () => console.log("Log in 3 seconds");
			
			setTimeout(
				callbackFunction, 
				3000
			);
			
		}

	); 
