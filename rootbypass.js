'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.UserMainActivity");

		target_class.isDeviceRooted.implementation = function () {
		return false;
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