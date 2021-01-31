"use strict";

// menu interaction
var sn = document.querySelector("#side_nav");
var closeMenu = document.querySelector("#close_side_nav");
var menu = document.querySelector("#top_menu");

menu.onmousedown = function open_side_nav() {
  sn.style.display = "block";
};

closeMenu.onmousedown = function close_side_nav() {
  sn.style.display = "none";
}; // style


var centerBox_all = document.querySelectorAll(".centerBox");
var Style = document.querySelector("#Style");
var style = document.querySelector("#style");
var style_close = document.querySelector("#style_close");

Style.onclick = function () {
  for (var i = 0; i < centerBox_all.length; i++) {
    centerBox_all[i].style.display = "none";
  }

  style.style.display = "block";
};

style_close.onclick = function () {
  style.style.display = "none";
}; // credits


var Credits = document.querySelector("#Credits");
var credits = document.querySelector("#credits");
var credits_close = document.querySelector("#credits_close");

Credits.onclick = function () {
  for (var i = 0; i < centerBox_all.length; i++) {
    centerBox_all[i].style.display = "none";
  }

  credits.style.display = "block";
};

credits_close.onclick = function () {
  credits.style.display = "none";
}; // var centerBox_close = document.querySelector(".centerBox_close");
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
// landmarks pin and testing interaction


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
var answer = document.querySelectorAll(".answer");
var result_A = document.querySelector(".result_A");
var result_B = document.querySelector(".result_B");
var result_C = document.querySelector(".result_C");
var result_D = document.querySelector(".result_D");
var results = document.querySelectorAll(".results");
var skip = document.querySelector("#skip");
var point = document.querySelector("#point");
var point_total = document.querySelector(".point_total");
var score = 0;
var bool = true;
var setTime = null;
var question_num = document.querySelector("#question_num");
var question_num_initial = 1;

test_close.onclick = function () {
  test_pos.style.display = "none";
};

pin_1.onclick = function () {
  landmark_image.style.backgroundImage = "url('../image/landmarks/Jerónimos_April_2009-4.jpg')";
  landmark_image.style.backgroundPosition = "-300px -100px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Mosteiro dos Jerónimos"; // landmark_image.style.backgroundSize = "800px";

  landmark_test.onclick = function () {
    question_num.innerHTML = "Q" + question_num_initial + "/3";
    question.innerHTML = "What stands between Jeronimos and the river?";
    A.innerHTML = "A: A parking lot.";
    B.innerHTML = "B: A museum.";
    C.innerHTML = "C: A restaurant.";
    D.innerHTML = "D: A garden.";
    test_pos.style.display = "block";
    A.addEventListener("click", clickA);
    B.addEventListener("click", clickB);
    C.addEventListener("click", clickC);
    D.addEventListener("click", clickD);

    function clickA() {
      result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    }

    function clickB() {
      result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    }

    function clickC() {
      result_C.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    }

    function clickD() {
      result_D.style.backgroundImage = "url('../icon/svg/correct.svg')";
      score = score + 3;
      point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
    }

    for (var i = 0; i < answer.length; i++) {
      var clickGeneral = function clickGeneral() {
        A.removeEventListener("click", clickA);
        B.removeEventListener("click", clickB);
        C.removeEventListener("click", clickC);
        D.removeEventListener("click", clickD);
      };

      answer[i].addEventListener("click", clickGeneral);
    }

    for (var _i = 0; _i < answer.length; _i++) {
      var setQuestion2 = function setQuestion2() {
        clearTimeout(setTime);
        setTime = setTimeout(function () {
          question_num_initial++;
          question_num.innerHTML = "Q" + question_num_initial + "/3";
          question.innerHTML = "What type of architecture is Jeronimos built in?";
          A.innerHTML = "A: Roman.";
          B.innerHTML = "B: Baroc.";
          C.innerHTML = "C: Gothic.";
          D.innerHTML = "D: Byzantine.";

          for (var _i2 = 0; _i2 < results.length; _i2++) {
            results[_i2].style.backgroundImage = "none";
          }

          A.addEventListener("click", clickA2);
          B.addEventListener("click", clickB2);
          C.addEventListener("click", clickC2);
          D.addEventListener("click", clickD2);

          function clickA2() {
            result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          function clickB2() {
            result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          function clickC2() {
            result_C.style.backgroundImage = "url('../icon/svg/correct.svg')";
            score = score + 3;
            point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
          }

          function clickD2() {
            result_D.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          for (var _i3 = 0; _i3 < answer.length; _i3++) {
            var clickGeneral2 = function clickGeneral2() {
              A.removeEventListener("click", clickA2);
              B.removeEventListener("click", clickB2);
              C.removeEventListener("click", clickC2);
              D.removeEventListener("click", clickD2);
            };

            answer[_i3].addEventListener("click", clickGeneral2);
          }
        }, 3000);
      };

      answer[_i].addEventListener("click", setQuestion2);
    }

    for (var _i4 = 0; _i4 < answer.length; _i4++) {
      var setQuestion3 = function setQuestion3() {
        clearTimeout(setTime);
        setTime = setTimeout(function () {
          question_num_initial++;
          question_num.innerHTML = "Q" + question_num_initial + "/3";
          question.innerHTML = "What type of landmark is Jeronimos?";
          A.innerHTML = "A: Museum.";
          B.innerHTML = "B: Monastery.";
          C.innerHTML = "C: Statue.";
          D.innerHTML = "D: Church.";

          for (var _i5 = 0; _i5 < results.length; _i5++) {
            results[_i5].style.backgroundImage = "none";
          }

          A.addEventListener("click", clickA3);
          B.addEventListener("click", clickB3);
          C.addEventListener("click", clickC3);
          D.addEventListener("click", clickD3);

          function clickA3() {
            result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          function clickB3() {
            result_B.style.backgroundImage = "url('../icon/svg/correct.svg')";
            score = score + 3;
            point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
          }

          function clickC3() {
            result_C.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          function clickD3() {
            result_D.style.backgroundImage = "url('../icon/svg/wrong.svg')";
          }

          for (var _i6 = 0; _i6 < answer.length; _i6++) {
            var clickGeneral3 = function clickGeneral3() {
              A.removeEventListener("click", clickA3);
              B.removeEventListener("click", clickB3);
              C.removeEventListener("click", clickC3);
              D.removeEventListener("click", clickD3);
            };

            answer[_i6].addEventListener("click", clickGeneral3);
          }
        }, 3000);
      };

      answer[_i4].addEventListener("click", setQuestion3);
    }
  };
}; // result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
// result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
// result_C.style.backgroundImage = "url('../icon/svg/wrong.svg')";
// result_D.style.backgroundImage = "url('../icon/svg/correct.svg')";
// if (bool == true) {
//   D.addEventListener("click", function () {
//     score = score + 3;
//     point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
//     return (bool = false);
//   });
// }
// D.onclick = function () {
//   score = score + 3;
//   point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
// };
// answer.onclick = setTimeout(function () {
//   question.innerHTML = "What type of architecture is Jeronimos built in?";
//   A.innerHTML = "A: Roman.";
//   B.innerHTML = "B: Baroc.";
//   C.innerHTML = "C: Gothic.";
//   D.innerHTML = "D: Byzantine.";
// }, 5000);
// D.addEventListener("click", function () {
//   result_D.style.backgroundImage = "url('../icon/svg/correct.svg')";
// });


pin_2.onclick = function () {
  landmark_image.style.backgroundImage = "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg";
  landmark_image.style.backgroundPosition = "-200px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Torre de Belém"; // landmark_image.style.backgroundSize = "900px";

  landmark_test.onclick = function () {
    question.innerHTML = "What was this landmarks' originally built for?";
    A.innerHTML = "A: It was originally intended to be a defensive stronghold.	";
    B.innerHTML = "B: A prison to lisbon's most notorious criminals.	";
    C.innerHTML = "C: Point of embarkation and disembarkment for portuguese explorers.	";
    D.innerHTML = "D: One of the king's private places."; // test_pos.style.width = "1000px";

    test_pos.style.display = "block";

    for (var i = 0; i < answer.length; i++) {
      // const element = array[i];
      answer[i].addEventListener("click", function () {
        setTimeout(function () {
          question.innerHTML = "What type of architecture is Torre de Belém built in?";
          A.innerHTML = "A: Roman.";
          B.innerHTML = "B: Baroc.";
          C.innerHTML = "C: Gothic.";
          D.innerHTML = "D: Byzantine.";
        }, 3000);
      });
    }

    A.onclick = function () {
      result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    };

    B.onclick = function () {
      result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    };

    C.onclick = function () {
      result_C.style.backgroundImage = "url('../icon/svg/correct.svg')";
    };

    D.onclick = function () {
      result_D.style.backgroundImage = "url('../icon/svg/wrong.svg')";
    };
  };
};

pin_3.onclick = function () {
  landmark_image.style.backgroundImage = "url('../image/landmarks/engenhos-da-calheta-madeira-2.jpg";
  landmark_image.style.backgroundPosition = "-100px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Castelo São Jorge"; // landmark_image.style.backgroundSize = "cover";

  landmark_test.onclick = function () {
    question.innerHTML = "Why is castelo de são jorge located on that specific location?";
    A.innerHTML = "A: Closer to the sky makes the towers warmer for the soldiers";
    B.innerHTML = "B: His hill is the tallest closest to the river enabling height advantage and quick sea acess";
    C.innerHTML = "C: There is not a real reason for the location of the castle";
    D.innerHTML = "D: Lisbon being located in na area with 7 hills the 4rth one was chosen for superstitious reasons";
    test_pos.style.display = "block";
  };
};