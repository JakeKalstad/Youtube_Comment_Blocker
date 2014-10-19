function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script); 
  }, false);
  document.body.appendChild(script);
}
addJQuery(function() {   
		console.log('posting');
		window.postMessage("wtf", '*');
		debugger;
		chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
		chrome.storage.local.get('word_options', function(items) {				  
					alert(items);
			   });
		$(".Ct:contains('Reddit')").closest('.ju').remove(); 
		$(".Ct:contains('Reddits')").closest('.ju').remove(); 
		$(".Ct:contains('reddit')").closest('.ju').remove(); 
});