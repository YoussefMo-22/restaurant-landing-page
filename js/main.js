function toggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navlist") {
      x.className += " responsive";
    } else {
      x.className = "navlist";
    }
  }