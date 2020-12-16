'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		Java.enumerateLoadedClasses({

		onMatch: function(className){

			console.log(className);
		},
		onComplete: function(){

		console.log("TY fam");

		}
		});

		}
		catch(error){
		 console.log("error");
		 // console.log(String(error.stack));
		}
	});

}
else {

console.log("[-] Java is not available");
}