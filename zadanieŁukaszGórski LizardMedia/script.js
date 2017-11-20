'use strict';

    

//Oferta function
function myFunctionOferta() {
    document.getElementById("mydropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//////////////tooltip/popup Function


function myFunctiontooltip() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

    