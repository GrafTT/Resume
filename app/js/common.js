window.onload = function () {
		var width = 1;
		var elem = document.getElementsByClassName("myBar");
		var maxValue = document.getElementsByClassName('max-value'); 

		for(var i = 0; i < elem.length; i++) {
			var params = {
				elem: elem[i],
				maxElem: maxValue[i],
				width: width,
				interval: null
			};
			params.interval = setInterval(frame, 10, params);
		}

		function frame(aParams) {
			if (aParams.width >= aParams.maxElem.dataset.max) {
				clearInterval(aParams.interval);
			} 
			else {
				aParams.width++;
				aParams.elem.style.backgroundColor = '#fff';
				aParams.elem.style.width = aParams.width + '%';
				aParams.maxElem.innerHTML = aParams.width + '%';
			}
		}

		var btn = document.getElementById('hamburg');
		btn.onclick = function(){
			var nav = document.getElementById('nav');
			if(nav.style.display == 'none'){
				nav.style.display = 'inline-block';
			}
			else{
				nav.style.display = 'none';
			}
		}


};

// window.onload = function menu() {
// 	var btn = document.getElementById('hamburg');
// 	btn.onclick = function(){
// 		var nav = document.getElementById('nav');
// 		if(nav.style.display == 'none'){
// 			nav.style.display = 'inline-block';
// 		}
// 		else{
// 			nav.style.display = 'none';
// 		}
// 	}
// }