'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.AESCrypt");
		console.log(Object.getOwnPropertyNames(target_class).join('/n'));
		
		}
		catch(error){
		 console.log("error");
		 console.log(String(error.stack));
		}
	});

}
else {

console.log("[-] Java is not available");
}