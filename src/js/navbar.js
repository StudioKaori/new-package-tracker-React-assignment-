
const mySidenav = document.getElementById("mySidenav");

window.addEventListener('resize', function () {
  resizeNav();
}, false);

window.addEventListener('load', function () {
  resizeNav();
}, false);

function resizeNav() {
  if (window.innerWidth >= 750) {
    mySidenav.classList.add("header-menu-PC");
  } else if (window.innerWidth < 750) {
    mySidenav.classList.remove("header-menu-PC");
  }
}

function openNav() {
  mySidenav.style.width = "250px";
}

function closeNav() {
  mySidenav.style.width = "0";
}
