// global variable
    var a=10;
    var b=20

// local variable

/*    
    function myFunction(){
	 var c=30;
	 var d=40;
	 alert(a+b);
	 alert(c+d);
	 alert(c%d);
} 

myFunction();
*/
/*
function increment(){
    	var x=10;
    	var y=20;
    	x++;
    	alert(x);
    	}

function decrement(){
    	var x=10;
    	var y=20;
    	y--;
    	alert(y);
    	}

function plusEqual(){
	var x=10;
	var y=20;
	x+=y;
	alert(x);
	}
*/
/*
function temp(){
    	var f= prompt("please enter the no.");
    	var c=(f-32)*5/9;
    	alert(c);
    }
*/

/*
function discount(){
    	var age= prompt('please enter the age !');
    	
    	if(age<=14)
    		{
    			alert('Not Allowed');
    		}
    	 if(age>14 && age!=50 && age<65)
    		{
    			
    			alert('Regular Price');
    		}
    	if(age==50)
    		{
    			alert('Special discount');
    		}	
    }
*/
/*   
function age(){
		var age= prompt ('Enter the age');
		
		if(age==14)
			{
				alert('coupon1');
			}
		else if(age==21)
			{
				alert('coupon2');
			}
		else if(age==30)
			{
				alert('coupon3');
			}
		else
			{
				alert('No Coupon');
			}
}
*/
/*
function dish(){
		var day= prompt ('Enter the day');
		
		if(day=="monday")
			{
				alert('Mondays,we serve pasta');
			}
		else if(day=="tuesday")
		{
			alert('Tuesday,we serve burger');
		}
		else if(day=="wednesday")
		{
			alert('wednesday,we serve biryani');
		}
		else if(day=="thursday")
		{
			alert('Thursday,we serve fries');
		}
		else if(day=="friday")
		{
			alert('friday,we serve tacos');
		}		
}
*/
/*
function movie(){
		var year=prompt ('Enter the year');
		
	
		if(year==2004)
		{
			alert('BAGHBAN won the oscar this year');
		}
		else if(year==2005)
		{
			alert('HERA PHERI won the oscar this year');
		}
		else if(year==2006)
		{
			alert('KOI MIL GAYA won the oscar this year');
		}
		else if(year==2007)
		{
			alert('NAMASTEY LONDON won the oscar this year');
		}
		else if(year==2008)
		{
			alert('WELCOM won the oscar this year');
		}
		else if(year==2009)
		{
			alert('SINGH IS KING won the oscar this year');
		}
		else if(year==2010)
		{
			alert('3 IDIOTS won the oscar this year');
		}
		else if(year==2011)
		{
			alert('BAGHBAN won the oscar this year');
		}
		else
			{
				alert('please enter between 2003-20012');
			}
}
*/
/*
function grade(){
		var value=prompt('please enter the grade');
		
		if(value==="A+")
			{
				alert('Excellent');
			}
		else if(value==="A")
			{
				alert('Good');
			}
		else if(value==="A-")
		{
			alert('Average');
		}
		else if(value==="B")
		{
			alert('Better');
		}
		else if(value==="C")
		{
			alert('Poor');
		}
		else
		{
			alert('Fail');
		}
}
*/
    
function obamaCare(){
    	var gender = prompt ('Please enter your gender');
    	var age = prompt ('Please enter your age');
    	var country = prompt ('Please enter your country');
    	
    	if (gender==="male")
    		{
    		if( age >= 21)
    			{
    			if ( country=="usa")
    				{
    				alert('You are eligible for Obamacare');
    				
    				}
    			else
        		{
        			alert('You are not eligible for Obamacare');
        		}
    			}
    		
    		else
    		{
    			alert('You are not eligible for Obamacare');
    		}
    		}
    	
    	else if (gender==="female")
    		{
    		if (age>=19)
    			{
    			if (country=="usa")
    				{
    				alert('You are eligible for Obamacare');
    				}
    			else
        		{
        			alert('You are not eligible for Obamacare');
        		}
    			}
    		else
    		{
    			alert('You are not eligible for Obamacare');
    		}
    		}
    	
    	else
    		{
    			alert('You are not eligible for Obamacare');
    		}
    }
    
    
/*
function user(){
		var age=prompt ('Enter your age');
		
		switch(age){
		case "14":
			alert('coupon1');
		break;
		case "21":
			alert('coupon2');
		break;
		case "30":
			alert('coupon3');
		break;
		case "50":
			alert('coupon4');
		break;
		default:
			alert('No coupon');
		}
}
*/

function menu(){
		var day= prompt ('Enter the day');
		
		switch(day){
		case"monday":
			alert('Mondays,we serve pasta');
		break;
		case"tuesday":
			alert('Tuesday,we serve burger');
		break;
		case"wednesday":
			alert('Wednesdays,we serve pizza');
		break;
		case"thursday":
			alert('Thursdays,we serve burrito');
		break;
		case"friday":
			alert('Fridays,we serve tacos');
		break;
		default:
			alert('We are closed today');
		
		}		
}

function oscar(){
		var year=prompt ('Enter the year');
		
		switch(year){
		case"2004":
			alert('BAGHBAN won the oscar this year');
		break;
		case"2005":
			alert('HERA PHERI won the oscar this year');
		break;
		case"2006":
			alert('NAMASTE LONDON won the oscar this year');
		break;
		case"2007":
			alert('SINGH IS KING won the oscar this year');
		break;
		case"2008":
			alert('PAA won the oscar this year');
		break;
		case"2009":
			alert('DON won the oscar this year');
		break;
		case"2010":
			alert('3 IDIOTS won the oscar this year');
		break;
		case"2011":
			alert('WELCOME won the oscar this year');
		break;
		default:
			alert('Please enter between 2003-2012');
		}
}

//ATM 

function atm(){
		var amount = prompt ('Please enter the amount');
		
		if(amount >= 20)
			{
			if(amount %20===0)
				{
					alert('Your amount is ready');
				}
			else
			{
			 alert('Please enter multiples of 20');
			}
			}
		else
		{
		 alert('Please enter multiples of 20');
		}	
}
/*
function oneTwo(){
		
		var i;
		
		for(i=1;i<=5;i++)
			{
				console.log(i);
			}
}
oneTwo();
*/
/*
function test(){
	var x=20;
	for(var j=10;j<=14;j=j+2)
		{
		 if(j%2===0)
			 {
			 	console.log(j+x);
			 }
	else
		{
			console.log(x-j);
		}
		}
}
test();
*/
/*
function que1(){
	for(var i=1;i<=30;i++)
		{
		 console.log(i);
		}
}
que1();
*/
/*
function que2(){
	for(var i=10;i>=1;i--)
		{
		 console.log(i);
		}
}
que2();
*/
/*
function que3(){
	var sum=0;
	for(var i=12;i<=33;i++)
		{
		 console.log(i);
		 sum=sum+i;
		}
	console.log(sum);
}
*/
/*
function que4(){
	for(var i=1;i<=30;i=i+2)
		{
		 console.log(i);
		}
}
que4();
*/
/*
function que5(){
	for(var i=2;i<=30;i=i+2)
		{
		 console.log(i);
		}
}
que5();
*/
/*
function que(){
	var x=prompt ("Enter the number");
	x=parseInt(x);
	for( i=1;i<=9;i++)
		{
		x=x+1;
		console.log(x);
		}		
}
que();*/
/*
function prime(){
	var no= prompt("Number please");
	no=parseInt(no);
	var i;
	for (i=2;i<no;i++)
		{
			if(no%i===0)
				{
					alert("is not a prime no");
					break;
				}
		}
	alert("This is prime no");
				
		}
prime();*/
/*
function rever(){
	var fruits=[40,100,1,5,10];
	var fru=fruits.sort(function(a,b){return});
		
		console.log(fru);
}
rever();*/
/*
function displayQuotes(){
	var quotes=["old is gold 1",
	            "old is gold 2",
	            "old is gold 3",
	            "old is gold 4",
	            "old is gold 5",
	            "old is gold 6",
	            "old is gold 7",
	            "old is gold 8",
	            "old is gold 9",
	            "old is gold 10"]
	for(i=0;i<quotes.length;i++)
		{
	console.log(quotes[i]);
		}
	
}
displayQuotes();
*/
//when all remaining days will show
function weekday(){
	var day = prompt ("Please enter the day");
	var weekdays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
	day=day.toLowerCase();
	var x=weekdays.indexOf(day);
	for(var i=x+1;i<=weekdays.length-1;i++)
		{
			console.log(weekdays[i]);
		}
		
	if(day===weekdays[6])
	{
		console.log("fafgagafg");
	}
}

function q9()
{
	var data = ['a','b','a','c','d','c','c'];
	for(i=0;i<data.length;i++)
	{
		for(j=i+1;j<data.length;j++)
		{
			if(data[i]===data[j])
				{
					alert( "Match found between" + i + "And" + j );
					
				}
		}
	}
}
/*
function had(){
	var name=prompt("Please enter the value");
	var person="james007";
	stripped = person.replace( 'james',"");
	alert(stripped);
}
had();*/

// DOM

function name1()
{
	var para = "This is my first para";
	document.getElementById('mytext').value=para;
	
}

function name2()
{
	var para = prompt(" Enter the text");
	document.getElementById('mytext1').value=para;
	
}

function name3()
{
	var x=document.getElementById('mytext2').value;
	document.getElementById('mytext3').value=x;
	document.getElementById('mytext2').value="";
	
}

function show(elementId)
{ 
	 document.getElementById("id1").style.display="none";
	
}

function changeColor()
{
	var x = document.getElementById("color").value;
	document.getElementById("color").style.backgroundColor=x;
	
	
}

function copy(){
	var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    
    
    document.getElementById("n3").value=n2;
    document.getElementById("n2").value=n1;
    document.getElementById("n1").value=n3;
    }

function test1()
{
	var z = "some text";
	document.getElementById("box").value=z;
}



//var x=false;	
function chose() {
	   x=!x;
	   document.getElementById("check").checked=x;
	   document.getElementById("radios").checked = x;
	      
}

function checkNum(){
	
	var x = document.getElementById("text1").value;
	var y = /\d/g;
	var i = x.match(y);
	if(x=i){
		document.getElementById("text1").value="";
		alert('Please enter only alphabets');
	}
	
}



var pic=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"]

var x=0;
function previous(){
	x--;
	if(x==-1){
		x=4;
		document.getElementById("img").src= pic[x];
	}
	else{
		x=x+1;
		document.getElementById("img").src= pic[x];
	}
}
function next(){
	x++;
	if(x==4){
		x=0;
		document.getElementById("img").src= pic[x];
	}
	else{
		document.getElementById("img").src= pic[x];
	}
}

function name(){
	var a = document.getElementById("name1").value;
	var b = document.getElementById("name2").value;
	var c = document.getElementById("name3").value;
	
	if (a>=0){
		alert ('hello');
	}
	
}


