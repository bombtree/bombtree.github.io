function getStatus(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			document.getElementById("statusDis").innerHTML = this.responseText;
		}
	};
	http.open("GET", "currStatus.txt", true);
	http.send();
	
}