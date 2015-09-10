 var currentIndex = 0,
   items = document.getElementsByClassName("shots-of-day-content-wrapper");
 itemAmt = items.length;

 function cycleItems() {
   var item = document.getElementsByClassName('shots-of-day-content-wrapper')[currentIndex];
   for (var i = 0; i < items.length; i++) {
     items[i].style.display = "none";
   }
   item.style.display = "inline-block";
 }

 function nextItem() {
   currentIndex += 1;
   if (currentIndex > itemAmt - 1) {
     currentIndex = 0;
   }
   cycleItems();
 }

 function prevItem() {
   currentIndex -= 1;
   if (currentIndex < 0) {
     currentIndex = itemAmt - 1;
   }
   cycleItems();
 }
 document.getElementById("prev").addEventListener("click", prevItem);
 document.getElementById("next").addEventListener("click", nextItem);