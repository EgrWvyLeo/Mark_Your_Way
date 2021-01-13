// menu interaction
var sn = document.querySelector("#side_nav");
var closeMenu = document.querySelector("#close_side_nav");
var menu = document.querySelector("#top_menu");

menu.onmousedown = function open_side_nav() {
  sn.style.display = "block";
};
closeMenu.onclick = function close_side_nav() {
  sn.style.display = "none";
};

// style
var centerBox_all = document.querySelectorAll(".centerBox");

var Style = document.querySelector("#Style");
var style = document.querySelector("#style");
var style_close = document.querySelector("#style_close");

Style.onclick = function () {
  for (let i = 0; i < centerBox_all.length; i++) {
    centerBox_all[i].style.display = "none";
  }
  style.style.display = "block";
};

style_close.onclick = function () {
  style.style.display = "none";
};

// credits
var Credits = document.querySelector("#Credits");
var credits = document.querySelector("#credits");
var credits_close = document.querySelector("#credits_close");

Credits.onclick = function () {
  for (let i = 0; i < centerBox_all.length; i++) {
    centerBox_all[i].style.display = "none";
  }
  credits.style.display = "block";
};
credits_close.onclick = function () {
  credits.style.display = "none";
};

// var centerBox_close = document.querySelector(".centerBox_close");
// var centerBox = document.querySelector(".centerBox");

// centerBox_close.onclick = function () {
//   centerBox.style.display = "none";
// };

// if ((credits.style.display = "none")) {
//   Credits.onclick = function () {
//     credits.style.display = "block";
//   };
// } else if ((credits.style.display = "block")) {
//   Credits.onclick = function () {
//     credits.style.display = "none";
//   };
// }

// var bool = false;
// if ((bool = false)) {
//   Credits.onclick = function () {
//     credit.style.display = "block";
//     bool = true;
//   };
// }
// if ((bool = true)) {
//   Credits.onclick = function () {
//     credit.style.display = "none";
//   };
// }
