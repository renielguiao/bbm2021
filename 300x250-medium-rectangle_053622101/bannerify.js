(function () {
	function onImagesLoaded(container, event) {
		var images = container.getElementsByTagName("img");
		var loaded = images.length;
		for (var i = 0; i < images.length; i++) {
			if (images[i].complete) {
				loaded--;
			}
			else {
				images[i].addEventListener("load", function() {
					loaded--;
					if (loaded == 0) {
						event();
					}
				});
			}
			if (loaded == 0) {
				event();
			}
		}
	}
	
	onImagesLoaded(document.getElementById("banner2_178874418"), function() {document.getElementById("banner2_178874418Loader").style.display = 'none';
		
		var elements = document.getElementById("banner2_178874418").getElementsByClassName('js-bnfy');
		for (var i=0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		
		var playCount = 0;
		var playbackLoop = setInterval(function () {
			replayAnimations();
			playCount = playCount + 1;
			if(playCount === 2) {
				clearInterval(playbackLoop);
			}
		}, 8000);
		
		function replayAnimations() {
			var banner = document.getElementById("banner2_178874418");
			var children = banner.childNodes;
			for (var i = 0; i < children.length; i++) {
				var cloned = children[i].cloneNode(true);
				banner.replaceChild(cloned, children[i]);
			}
		}
	});
	document.getElementById('banner2_178874418').addEventListener('click', function () {
		window.open(window.clickTag);
	});})();