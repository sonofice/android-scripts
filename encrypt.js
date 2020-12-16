'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.AESCrypt");

		var encryptedtext = target_class.encrypt("securestoreandroidaes", "x' or 'x'='x");
		
		console.log(encryptedtext);
		
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