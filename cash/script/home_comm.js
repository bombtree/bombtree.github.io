function getStatus(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			document.getElementById("statusDis").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "http://bombtree.github.io/cash/script/currStatus.txt", true);
	xhttp.send();
	
}