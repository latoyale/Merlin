//checks to see if the page has completed loading. If not a timer is started then the callback is called. -- The onreadystatechange should determine if the page has changed, then it checks if the page has loaded.

	document.onreadystatechange = function (callback) {

	if document.readyState === "complete";) 
		{
       		 callWhenReadyToGo();
    		}

	else
		{
		window.onload = function () { 
		var checkReadyState = setInterval(() => {
 
		 if (document.readyState === "interactive") {
    		clearInterval(checkReadyState);
  		}
		}, 100);
	 }	       
	 callWhenReadyToGo();
	}

}

//Once the callback is called, the XML open requests are counted and send back as a response in the console.

		function callWhenReadyToGo(callback) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
 		console.log('DONE', xhr.status);
	};

		xhr.send(null);

	};
