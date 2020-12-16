'use strict'

if(Java.available) {

	Java.perform(function(){

		try{

		var target_class = Java.use("android.webkit.WebViewClient");

		target_class.onReceivedSslError.overload("android.webkit.WebView","android.webkit.SslErrorHandler","android.net.http.SslError").implementation = function (a,b,c) {
		b.proceed();

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