AOS.init();

window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("head").style.height = "95px";
    document.getElementById("head").style.backgroundColor =
      "rgba(0, 0, 0, 0.471)";
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName("links")[i].style.fontSize = "15px";
    }
  } else {
    document.getElementById("head").style.height = "120px";
    document.getElementById("head").style.backgroundColor = "transparent";
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName("links")[i].style.fontSize = "16px";
    }
  }
};

function link(e) {
  document.getElementsByClassName("active")[0].className = "links";
  e.setAttribute("class", "links active");
}

const theme = localStorage.getItem("theme");

function changeIcon(e) {
  let theme2 = localStorage.getItem("theme");

  if (theme2 === "light") {
    e.innerHTML = "<i class='fas fa-moon' id='moon'></i>";
    localStorage.setItem("theme", "dark");
    document.getElementById("clr").style.backgroundColor = "#121212";
    document.getElementById("clr").style.color = "white";
  } else {
    e.innerHTML = "<i class='fas fa-sun' id='sun'></i>";
    localStorage.setItem("theme", "light");
    document.getElementById("clr").style.backgroundColor = "#bedde7";
    document.getElementById("clr").style.color = "#485648";
  }
}

function start(e) {
  if (theme === "dark") {
    e.innerHTML = "<i class='fas fa-moon' id='moon'></i>";
    localStorage.setItem("theme", "dark");
    document.getElementById("clr").style.backgroundColor = "#121212";
    document.getElementById("clr").style.color = "white";
  } else {
    e.innerHTML = "<i class='fas fa-sun' id='sun'></i>";
    localStorage.setItem("theme", "light");
    document.getElementById("clr").style.backgroundColor = "#bedde7";
    document.getElementById("clr").style.color = "#485648";
  }
}

start(document.getElementById("parentDiv"));

