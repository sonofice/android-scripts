'use strict'

if(Java.available) {

	Java.perform(function(){
		try{
		console.log("");
		console.log("sup");
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