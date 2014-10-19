 
			
			function update() {
				var element = document.getElementById('words');
				var words = element.value;  
				chrome.storage.local.set({
				   word_options: words
			   }); 
			} 
			function loadHandler() { 
				var element = document.getElementById('sub');
				var textArea = document.getElementById('words');
				chrome.storage.local.get('word_options', function(items) {				  
					textArea.value = items.word_options;
					element.addEventListener('click', update); 
			   });
			}
			window.addEventListener('load', loadHandler);