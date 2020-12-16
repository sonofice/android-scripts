'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.AESCrypt");

		target_class.encrypt.overload("java.lang.String","java.lang.String").implementation = function (a,b) {
		console.log("argument 1: " + a.toString());
		console.log("argument 1: " + b.toString());
		return a;
		};
		
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