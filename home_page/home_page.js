// menu interaction
var sn = document.querySelector("#side_nav");
var closeMenu = document.querySelector("#close_side_nav");
var menu = document.querySelector("#top_menu");

menu.onmousedown = function open_side_nav() {
  sn.style.display = "block";
};
closeMenu.onmousedown = function close_side_nav() {
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

// landmarks pin interaction
var pin_1 = document.querySelector("#pin_1");
var pin_2 = document.querySelector("#pin_2");
var pin_3 = document.querySelector("#pin_3");
var landmark_image = document.querySelector(".landmark_image");
var lisbon = document.querySelector(".landmark_image p");
var landmark_name = document.querySelector(".landmark_name");
var landmark_test = document.querySelector(".landmark_test");
var test_pos = document.querySelector("#test_pos");
var test_close = document.querySelector("#test_close");
var question = document.querySelector("#question");
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");

test_close.onclick = function () {
  test_pos.style.display = "none";
};

pin_1.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/Jerónimos_April_2009-4.jpg')";
  landmark_image.style.backgroundPosition = "-300px -100px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Mosteiro dos Jerónimos";
  // landmark_image.style.backgroundSize = "800px";
  landmark_test.onclick = function () {
    question.innerHTML = "What stands between Jeronimos and the river?";
    A.innerHTML = "A: A parking lot";
    B.innerHTML = "B: A museum";
    C.innerHTML = "C: A restaurant";
    D.innerHTML = "D: A garden";
    test_pos.style.display = "block";
  };
};

pin_2.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg";
  landmark_image.style.backgroundPosition = "-200px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Torre de Belém";
  // landmark_image.style.backgroundSize = "900px";
  landmark_test.onclick = function () {
    question.innerHTML = "What was this landmarks' originally built for?";
    A.innerHTML = "A: It was originally intended to be a defensive stronghold	";
    B.innerHTML = "B: A prison to lisbon's most notorious criminals	";
    C.innerHTML =
      "C: Point of embarkation and disembarkment for portuguese explorers	";
    D.innerHTML = "D: One of the king's private places";
    // test_pos.style.width = "1000px";
    test_pos.style.display = "block";
  };
};

pin_3.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/engenhos-da-calheta-madeira-2.jpg";
  landmark_image.style.backgroundPosition = "-100px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Castelo São Jorge";
  // landmark_image.style.backgroundSize = "cover";
  landmark_test.onclick = function () {
    question.innerHTML =
      "Why is castelo de são jorge located on that specific location?";
    A.innerHTML =
      "A: Closer to the sky makes the towers warmer for the soldiers";
    B.innerHTML =
      "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess";
    C.innerHTML =
      "C: There is not a real reason for the location of the castle";
    D.innerHTML =
      "D: Lisbon being located in na area with 7 hills the 4rth one was chosen for superstitious reasons";
    test_pos.style.display = "block";
  };
};
