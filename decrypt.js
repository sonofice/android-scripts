'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.AESCrypt");

		var decryptedtext = target_class.encrypt("securestoreandroidaes", "B4QlZHRW0NtQ0Y4nD/qHQA==");
		
		console.log(decryptedtext);
		
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