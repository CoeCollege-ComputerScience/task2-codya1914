

document.getElementById("random").onclick = function(){
	var num = Math.floor(Math.random() *10);
	document.getElementById("result").innerHTML = num;
	
};

document.getElementById("f2c").onclick = function(){
	var f =document.getElementById("temperature").value;
	var result = document.getElementById("result")
	result.innerHTML = (f-32)/ 1.8+"";
};


