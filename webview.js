'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("android.webkit.WebView");

		target_class.loadUrl.overload("java.lang.String").implementation = function (a) {
		console.log("argument 1: " + a.toString());
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