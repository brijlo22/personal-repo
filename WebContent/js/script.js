

function next() {
	var x=["images/brij.jpg", "images/DSC_0010.JPG", "images/DSC_0011.JPG", "images/DSC_0023.JPG", "images/DSC_0025.JPG", ]
	
    if (i=0) 
    {
        document.getElementById("imgClickAndChange").src = x[i];
        alert( document.getElementById("imgClickAndChange").src);
        break;
    }
    if (document.getElementById("imgClickAndChange").src=x[4]){
    	
    
       document.getElementById("imgClickAndChange").src = x[0];
    }
	}

function previous() {
	var x=["images/thumb_IMG_4938.jpg", "images/thumb_IMG_4939.jpg", "images/thumb_IMG_4940.jpg", "images/thumb_IMG_4941.jpg", "images/thumb_IMG_4942.jpg", ]

	for(var i=0; i<=4; i++){
		
    if (document.getElementById("imgClickAndChange").src=x[i]) 
    {
        document.getElementById("imgClickAndChange").src = x[i-1];
        alert( document.getElementById("imgClickAndChange").src);
        
        break;
    }
    
    if(document.getElementById("imgClickAndChange").src =x[0]) 
    {
        document.getElementById("imgClickAndChange").src = x[4];
        break;
    }
	}
}
