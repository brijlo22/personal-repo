function checkLink(){
	var a = document.getElementById("google").href;
	var b = document.getElementById("fb").href; 
	var c = document.getElementById("twitter").href;
	var z = [a,b,c];
	var x = 0;
	var check = prompt("enter link", "http://www.pro-tekconsulting.com/");
	for (i=0;i<z.length;i++){
		if(z[i]=== check){
			alert("The link is found");
			x=1;
		}
	}
	if(x===0){
		alert('the link is not found');
	}
	document.getElementById("link").value = check;	
	
}

function addLink(){
	var str = "New Link";
    var result = str.link(document.getElementById("link").value);
    document.getElementById("url").innerHTML = result;

}