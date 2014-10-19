function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
	chrome.storage.local.get('word_options', function(items) {		 
		var script = document.createElement("script");
		script.textContent = "(" + callback.toString() + ")('"+items.word_options.trim()+"');";
		document.body.appendChild(script); 
	}); 
  }, false);
  document.body.appendChild(script);
}

addJQuery(function(myItems) {   
		console.log('posting');
		console.log(myItems);
		var items = myItems.split(',');
		for(var i=0;i<items.length;i++) {
			$(".Ct:contains('" + items[i] + "')").closest('.ju').remove(); 
		}
});