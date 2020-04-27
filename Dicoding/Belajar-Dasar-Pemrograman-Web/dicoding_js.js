window.onload = function(){
	time();
	date();
	setInterval(function(){
		time();
		date();
	}, 1000);
};
function time() { 
		var tanggal = new Date(); 
		setTimeout("time()",1000); 
		document.getElementById("jam").innerHTML = tanggal.getHours(); 
		document.getElementById("menit").innerHTML = tanggal.getMinutes();
		document.getElementById("detik").innerHTML = tanggal.getSeconds();
	} 
function date(){
	var date = new Date(),
		currentDay = date.getDay(),
		date = document.getElementsByClassName("name");
	for (x in date){
		var classArr = date[x].classList;
		(classArr !== undefined) && ((x == currentDay) ? classArr.add("current-date") : classArr.remove("current-date"));
	}
}