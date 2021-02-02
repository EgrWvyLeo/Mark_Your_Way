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

//some interaction of landmark btn with icons
var landmark_like = document.querySelector(".landmark_like");
var heart = document.querySelector(".heart");

landmark_like.addEventListener("mouseover", function () {
  heart.style.fill = "#d7443e";
  // heart.classList.toggle("heartToggle");
});
landmark_like.addEventListener("mouseout", function () {
  heart.style.fill = "black";
  // heart.classList.toggle("heartToggle");
});

// landmarks pin and testing interaction
var pin_1 = document.querySelector("#pin_1");
var pin_2 = document.querySelector("#pin_2");
var pin_3 = document.querySelector("#pin_3");
var landmark_image = document.querySelector(".landmark_image");
var lisbon = document.querySelector(".landmark_image p");
var landmark_name = document.querySelector(".landmark_name");
var landmark_test = document.querySelector(".landmark_test");
var test_pos = document.querySelector("#test_pos");
var test = document.querySelector("#test");
var test_close = document.querySelector("#test_close");
var question = document.querySelector("#question");
var A = document.querySelector("#A");
var B = document.querySelector("#B");
var C = document.querySelector("#C");
var D = document.querySelector("#D");
var answer = document.querySelectorAll(".answer");
// var result_A = document.querySelector(".result_A");
// var result_B = document.querySelector(".result_B");
// var result_C = document.querySelector(".result_C");
// var result_D = document.querySelector(".result_D");
// var results = document.querySelectorAll(".results");
// var skip = document.querySelector("#skip");
var next = document.querySelector("#next");
var result = document.querySelector("#result");
var point = document.querySelector("#point");
var point_total = document.querySelector(".point_total");
var score = 0;
var bool = true;
var setTime = null;
var question_num = document.querySelector("#question_num");
var question_num_initial = 1;
var count = 0;
var questionPass = 0;
var scoreEachLandmark = 0;

var ResultBox = document.querySelector("#ResultBox");
var resultBox_questionBoard = document.querySelector(
  "#resultBox_questionBoard"
);
var resultBox_scoreBoard = document.querySelector("#resultBox_scoreBoard");
var resultBox_countdown = document.querySelector("#resultBox_countdown");

//making close button
test_close.onclick = function () {
  test_pos.style.display = "none";
  count = 0;
  result.style.display = "none";
  // skip.style.display = "block";
  next.style.display = "block";
  scoreEachLandmark = 0;
  questionPass = 0;
};

// get all the tests from array
function showTest(index1, index2, totalQ) {
  point.innerHTML = allTest[index1][index2].point + " Points";
  question_num.innerHTML = allTest[index1][index2].num + "/" + totalQ;
  question.innerHTML = allTest[index1][index2].question;
  A.innerHTML = allTest[index1][index2].options[0];
  B.innerHTML = allTest[index1][index2].options[1];
  C.innerHTML = allTest[index1][index2].options[2];
  D.innerHTML = allTest[index1][index2].options[3];
}

pin_1.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/Jerónimos_April_2009-4.jpg')";
  landmark_image.style.backgroundPosition = "-300px -100px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Mosteiro dos Jerónimos";
  let landmarkCount = 0;

  landmark_test.addEventListener("click", landmarkTestFunction);
  function landmarkTestFunction() {
    for (let i = 0; i < answer.length; i++) {
      answer[i].classList.remove("tick", "cross");
    }
    test.classList.remove("clearTest");
    ResultBox.style.display = "none";
    test_pos.style.display = "block";
    showTest(landmarkCount, count, totalQuestion[landmarkCount]);
  }

  // set interaction when clicking the next button
  next.addEventListener("click", function () {
    count++;
    showTest(landmarkCount, count, totalQuestion[landmarkCount]);
    for (let i = 0; i < answer.length; i++) {
      answer[i].classList.remove("disable", "tick", "cross");
    }
    if (count == totalQuestion[landmarkCount] - 1) {
      result.style.display = "block";
      // skip.style.display = "none";
      next.style.display = "none";
    }
    // if (allTest[0][2].num == totalQuestion[0]) {
    //   result.style.display = "block";
    // }
  });

  //make interaction of skip button
  // skip.addEventListener("click", function () {
  //   count++;
  //   showTest(landmarkCount, count, totalQuestion[landmarkCount]);
  //   if (count == totalQuestion[landmarkCount] - 1) {
  //     result.style.display = "block";
  //     skip.style.display = "none";
  //     next.style.display = "none";
  //   }
  // });

  //add result interaction
  result.addEventListener("click", function () {
    test.classList.add("clearTest");
    ResultBox.style.display = "flex";
    resultBox_questionBoard.innerHTML =
      "You get " +
      questionPass +
      " questions correct out of total " +
      totalQuestion[landmarkCount] +
      " questions";
    resultBox_scoreBoard.innerHTML =
      "You get total " + scoreEachLandmark + " points";
  });

  var timer = 100000;
  var timerCounter = 0;
  var days = Math.floor((timer - timerCounter) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor(
    ((timer - timerCounter) % (1000 * 60 * 60)) / (1000 * 60)
  );
  var seconds = Math.floor(((timer - timerCounter) % (1000 * 60)) / 1000);

  setInterval(() => {
    resultBox_countdown.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // timer -= 1000;
    timerCounter += 1000;
  }, 1000);

  // get the user score if he successfully get the correct answer
  for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", function () {
      landmark_test.removeEventListener("click", landmarkTestFunction);
      setTimeout(function () {
        landmark_test.addEventListener("click", landmarkTestFunction);
      }, timer);
      let userSelect = this.innerHTML;
      let correctAnswer = allTest[landmarkCount][count].answer;
      if (userSelect == correctAnswer) {
        score = score + allTest[landmarkCount][count].point;
        scoreEachLandmark =
          scoreEachLandmark + allTest[landmarkCount][count].point;
        questionPass++;
        point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
        this.classList.add("tick");
        allTest[landmarkCount][count].point = 0;
      } else {
        this.classList.add("cross");
      }
      for (let j = 0; j < answer.length; j++) {
        answer[j].classList.add("disable");
      }
    });
  }

  // disable all the event when user click an answer
  // for (let i = 0; i < answer.length; i++) {

  // }

  // landmark_test.onclick = function () {
  //   question_num.innerHTML = "Q" + question_num_initial + "/3";
  //   question.innerHTML = "What stands between Jeronimos and the river?";
  //   A.innerHTML = "A: A parking lot.";
  //   B.innerHTML = "B: A museum.";
  //   C.innerHTML = "C: A restaurant.";
  //   D.innerHTML = "D: A garden.";
  //   test_pos.style.display = "block";

  //   A.addEventListener("click", clickA);
  //   B.addEventListener("click", clickB);
  //   C.addEventListener("click", clickC);
  //   D.addEventListener("click", clickD);
  //   function clickA() {
  //     result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //   }
  //   function clickB() {
  //     result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //   }
  //   function clickC() {
  //     result_C.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //   }
  //   function clickD() {
  //     result_D.style.backgroundImage = "url('../icon/svg/correct.svg')";
  //     score = score + 3;
  //     point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
  //   }
  //   for (let i = 0; i < answer.length; i++) {
  //     answer[i].addEventListener("click", clickGeneral);
  //     function clickGeneral() {
  //       A.removeEventListener("click", clickA);
  //       B.removeEventListener("click", clickB);
  //       C.removeEventListener("click", clickC);
  //       D.removeEventListener("click", clickD);
  //     }
  //   }

  //   for (let i = 0; i < answer.length; i++) {
  //     answer[i].addEventListener("click", setQuestion2);
  //     function setQuestion2() {
  //       clearTimeout(setTime);
  //       setTime = setTimeout(function () {
  //         question_num_initial++;
  //         question_num.innerHTML = "Q" + question_num_initial + "/3";
  //         question.innerHTML =
  //           "What type of architecture is Jeronimos built in?";
  //         A.innerHTML = "A: Roman.";
  //         B.innerHTML = "B: Baroc.";
  //         C.innerHTML = "C: Gothic.";
  //         D.innerHTML = "D: Byzantine.";
  //         for (let i = 0; i < results.length; i++) {
  //           results[i].style.backgroundImage = "none";
  //         }

  //         A.addEventListener("click", clickA2);
  //         B.addEventListener("click", clickB2);
  //         C.addEventListener("click", clickC2);
  //         D.addEventListener("click", clickD2);
  //         function clickA2() {
  //           result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         function clickB2() {
  //           result_B.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         function clickC2() {
  //           result_C.style.backgroundImage = "url('../icon/svg/correct.svg')";
  //           score = score + 3;
  //           point_total.innerHTML =
  //             "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
  //         }
  //         function clickD2() {
  //           result_D.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         for (let i = 0; i < answer.length; i++) {
  //           answer[i].addEventListener("click", clickGeneral2);
  //           function clickGeneral2() {
  //             A.removeEventListener("click", clickA2);
  //             B.removeEventListener("click", clickB2);
  //             C.removeEventListener("click", clickC2);
  //             D.removeEventListener("click", clickD2);
  //           }
  //         }
  //       }, 3000);
  //     }
  //   }

  //   for (let i = 0; i < answer.length; i++) {
  //     answer[i].addEventListener("click", setQuestion3);
  //     function setQuestion3() {
  //       clearTimeout(setTime);
  //       setTime = setTimeout(function () {
  //         question_num_initial++;
  //         question_num.innerHTML = "Q" + question_num_initial + "/3";
  //         question.innerHTML = "What type of landmark is Jeronimos?";
  //         A.innerHTML = "A: Museum.";
  //         B.innerHTML = "B: Monastery.";
  //         C.innerHTML = "C: Statue.";
  //         D.innerHTML = "D: Church.";
  //         for (let i = 0; i < results.length; i++) {
  //           results[i].style.backgroundImage = "none";
  //         }

  //         A.addEventListener("click", clickA3);
  //         B.addEventListener("click", clickB3);
  //         C.addEventListener("click", clickC3);
  //         D.addEventListener("click", clickD3);
  //         function clickA3() {
  //           result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         function clickB3() {
  //           result_B.style.backgroundImage = "url('../icon/svg/correct.svg')";
  //           score = score + 3;
  //           point_total.innerHTML =
  //             "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
  //         }
  //         function clickC3() {
  //           result_C.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         function clickD3() {
  //           result_D.style.backgroundImage = "url('../icon/svg/wrong.svg')";
  //         }
  //         for (let i = 0; i < answer.length; i++) {
  //           answer[i].addEventListener("click", clickGeneral3);
  //           function clickGeneral3() {
  //             A.removeEventListener("click", clickA3);
  //             B.removeEventListener("click", clickB3);
  //             C.removeEventListener("click", clickC3);
  //             D.removeEventListener("click", clickD3);
  //           }
  //         }
  //       }, 3000);
  //     }
  //   }
  // };
};

// result_A.style.backgroundImage = "url('../icon/svg/wrong.svg')";
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
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg";
  landmark_image.style.backgroundPosition = "-200px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Torre de Belém";
  // landmark_image.style.backgroundSize = "900px";
  landmark_test.onclick = function () {
    question.innerHTML = "What was this landmarks' originally built for?";
    A.innerHTML = "A: It was originally intended to be a defensive stronghold.	";
    B.innerHTML = "B: A prison to lisbon's most notorious criminals.	";
    C.innerHTML =
      "C: Point of embarkation and disembarkment for portuguese explorers.	";
    D.innerHTML = "D: One of the king's private places.";
    // test_pos.style.width = "1000px";
    test_pos.style.display = "block";
    for (let i = 0; i < answer.length; i++) {
      // const element = array[i];
      answer[i].addEventListener("click", function () {
        setTimeout(function () {
          question.innerHTML =
            "What type of architecture is Torre de Belém built in?";
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
