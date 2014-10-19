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
		var removeComments = function(itms) {	
			console.log("Removing Comments");
			$(".Ct").filter(function() { 
				console.log($(this).text());
				for(var i=0;i<itms.length;i++) {			
					if(($(this).text().indexOf(itms[i]) > -1)) {
						return true;
					}
				}
				return false;
			}).each(function() { console.log('removed one'); $(this).closest('.ju').remove();});
		}
		console.log('posting');
		console.log(myItems);
		var items = myItems.split(',');
		removeComments(items); 
		var replyBtns = $("span.d-s").filter(function() { 
									return ($(this).text().indexOf('replies') > -1);
								});  
		replyBtns.bind('click', function(e) { 
			console.log('reply hit');
			removeComments(items); 
		});
		var showBtn = $("span").filter(function() { 
			return ($(this).text().indexOf('Show more') > -1);
		});
		showBtn.bind('click', function(e) {
			console.log('show button hit');
			setTimeout(function(){
				debugger;
				removeComments(items);
			}, 3000);			
		});
});