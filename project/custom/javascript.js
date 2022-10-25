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


