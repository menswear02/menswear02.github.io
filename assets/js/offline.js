
document.write(`<link rel="stylesheet" href="assets/css/offline.css">`)


var offlineMsg = document.getElementById("offline-message");

		function _showOfflineMessage(){
			document.getElementsByTagName("html")[0].setAttribute("offline",true);
			offlineMsg.setAttribute("aria-hidden","false");
			setTimeout(function(){
				offlineMsg.focus();
			},400);
		}

		function _hideOfflineMessage(){
			document.getElementsByTagName("html")[0].setAttribute("offline",false);
			offlineMsg.setAttribute("aria-hidden","true");
		}

		window.addEventListener("offline", _showOfflineMessage, false);

		window.addEventListener("online", _hideOfflineMessage, false);




/* 

<!-- in html -->

<div aria-hidden="true" tabindex="-1" id="offline-message">You appear to be offline.</div>

<script src="js/offline.js"></script>

*/