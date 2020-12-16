'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("com.androidpentesting.securestorev2.AESCrypt");

		target_class.bytesToHex.overload("[B").implementation = function (a) {
		
			var returnvalue = this.bytesToHex(a);
			console.log(returnvalue);
			return returnvalue;
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