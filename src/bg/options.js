 
			
			function update() {
				var element = document.getElementById('words');
				var words = element.value;
				var wordList = words.split(",");
				alert(wordList);
				chrome.storage.local.set({
				   word_options: wordList
			   }); 
			} 
			function loadHandler() { 
				var element = document.getElementById('sub');
				var textArea = document.getElementById('words');
				chrome.storage.local.get('word_options', function(items) {				  
					textArea.value = items;
					element.addEventListener('click', update); 
			   });
			}
			window.addEventListener('load', loadHandler);