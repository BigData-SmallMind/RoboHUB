const burger = document.getElementById("burger");
const navList = document.getElementsByClassName("nav-list")[0];

let navListStyles = window.getComputedStyle(navList);

const toggle = (e) => {
  e.preventDefault();
  if (navListStyles.getPropertyValue("display") == "none") {
    navList.style.display = "block";
  } else {
    navList.style.display = "none";
  }
};

const bodyClick = (e) => {

  if (navList.style.display == "block" && e.target.className != 'fa fa-bars') {
    navList.style.display = "none";

  }

};

burger.addEventListener("click", toggle);

document.body.addEventListener("click", bodyClick);
