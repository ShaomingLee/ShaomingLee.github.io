function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeDropdown() {
    document.getElementById("myDropdown").style.display = "none";
}

function openMapName() {
    document.getElementById("myMapName").style.width = "250px";
}
function closeMapName() {
    document.getElementById("myMapName").style.width ="0"
}
function openContactForm() {
    document.getElementById("contactForm").style.width = "100%";
}

function closeContactForm() {
    document.getElementById("contactForm").style.width = "0";
}
function openAbout() {
    document.getElementById("aboutPage").style.width = '100%';
}
function closeAbout() {
    document.getElementById('aboutPage').style.width = '0';
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

$('area').each(function(){
    var area = $(this),
        name = area.attr('alt'),
        mapName = document.getElementById('mapSideText');
    area.mouseover(function(){
        mapName.innerHTML = name;
        mapName.style.transition = 'all 1s'
        mapName.style.width= '200px'
    }).mouseleave(function(){
        mapName.innerHTML = '';
        mapName.style.width = "0px";
        mapName.style.transition = " all 0.5s";
    });
});

function showLogo() {
    document.getElementById('logo').style.opacity = '1';
  }

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      document.getElementById('logo').style.opacity = '0';
      
    } 
    else {
        document.getElementById('logo').style.opacity = '1';

    }
});