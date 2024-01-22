var hamburger = document.querySelector(".hamburger")
hamburger.onclick = function(){
  var  navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

}



function showDropdown() {
    var dropdownContent = document.getElementById('resources-dropdown');
    dropdownContent.style.display = 'block';
}

function hideDropdown() {
    var dropdownContent = document.getElementById('resources-dropdown');
    dropdownContent.style.display = 'none';
}




