/*
function find (){
	var name = prompt(" Please enter the name","learn");
	var x = "I learn JavaScript";
	var y = x.match(/learn/g);
	if(name == y){
		alert (" match is found");
	}
	else{
		alert ("match is not found");
	}
}
find();
*/

function showImg(){
	var x= document.getElementById("myId").value;
	document.getElementById("myId").style.border="";
	switch (x){
	case '3':
		document.getElementById("myImg").style.visibility="visible";
		document.getElementById("myImg").src='images/master.jpeg';
		break;
	case '4':
		document.getElementById("myImg").style.visibility="visible";
		document.getElementById("myImg").src='images/visa.png';
		break;
	case '5':
		document.getElementById("myId").maxLength=15;
		document.getElementById("myImg").style.visibility="visible";
		document.getElementById("myImg").src='images/amex.png';
		break;
	default:
		document.getElementById("myId").style.border="4px solid red";
}
}



function calc(x) {

    var y = document.getElementById("oper1").value;
    y=parseInt(y);
    var z = document.getElementById("oper2").value;
    z=parseInt(z);
    
   

    switch (x) {
        case 0 :
          alert (y+z);
          break;
        	
        case 1:
          alert (y-z);
          break;
        
        case 2:{
          alert (y*z);
          break;
        }
        case 3:{
          alert (y/z);
          break;
        }
        default:
            alert( "Don't really know..");
    }

}

function displayValue(a,b,c){
	
	var z= a+b+c;
	alert (z);
}

function sex(x){
	
	switch (x) {
	case 0:
		alert("you are male");
		break;
		
	case 1:
		alert("you are female");
		break;

	default:
		break;
	}
}

function img1(){
	
	document.getElementById("changeImg").src='images/visa.png';
}
function img2(){
	
	document.getElementById("changeImg").src='images/1.jpg';
}


/*
function factorial () {
	var n = prompt(" Please enter the number ");
	n=parseInt(n);
	var x = 1;
	for (var i=1;i<=n;i++){
		x=x*i;
		}
	console.log(x);
}
factorial();
*/


function myFunction() {
    var str = " hello world how are you and hello world";
    var x = str.split(" ");
    var y = x.sort();
    var k = [];
    for (var i=0; i<y.length;i++)
    {
        if( y[i] != y[i+1])
        {
        k.push(y[i]);
        }
    }
    var res=k.join(" ");
    console.log(res);
}
myFunction();

/*
function newFunction(){
var Array1 = new Array("a","b","c","d","e","f");
var Array2 = new Array("c","e");

for (var i = 0; i<Array2.length; i++) {
    var arrlen = Array1.length;
    for (var j = 0; j<arrlen; j++) {
        if (Array2[i] == Array1[j]) {
            Array1 = Array1.slice(0, j).concat(Array1.slice(j+1, arrlen));
        }
    }
}
alert(Array1);
}
newFunction ();
*/

/*
 function evenNumbers() {
	var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
	var evens = [];
	var odds = [];
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }
}
evenNumbers();
*/
/*
function even(){
	var str = []; var newArray = []; var array=[];
	for (var i= 1000; i<=3000; i++){
		 str =  i.toString();
	     newArray =  str.split("");
	
		if(newArray[0]%2===0 && newArray[1]%2===0 && newArray[2]%2===0 && newArray[3]%2===0){
			array.push(i);
		}
	}
	for(var j=0; j<array.length;j++)
		{
			console.log(array[j]);
		}
}
even();
*/

function checkForm(){
	document.getElementById("upper").checked = false;
	document.getElementById("number").checked = false;
	document.getElementById("specChar").checked = false;
	document.getElementById("length").checked = false;
	var num = [];
	num = document.getElementById("pwd").value;
	var x = num.match(/\d/g);
	var y =	num.match(/[A-Z]/g);
	var z = num.match(/[-!$%^&*()_+|~=`{}\]\\[\:;<>?,.@#]/g);
	
	if (x != null){
		document.getElementById("number").checked = true;
	}
	if (y != null){
		document.getElementById("upper").checked = true;	
	}
	if (z != null){
		document.getElementById("specChar").checked = true;
	}
	if (num.length >= 8){
		document.getElementById("length").checked = true;
	}
	
}

function checkLink(){
	var a = document.getElementById("google").href;
	var b = document.getElementById("fb").href; 
	var c = document.getElementById("twitter").href;
	var z = [a,b,c];
	z.push("http://www.twitter.com");
	console.log(z);
	
}








