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

//map buttons
var like = document.querySelector(".like");
var clear = document.querySelector(".clear");
var Pin = document.querySelector("#Pin");
var clearStatus = false;

clear.addEventListener("click", () => {
  if (clearStatus == false) {
    Pin.style.display = "none";
    clear.innerHTML = "Show";
    clearStatus = true;
  } else {
    Pin.style.display = "block";
    clear.innerHTML = "Hide";
    clearStatus = false;
  }
});

//some interaction of landmark btn with icons
var heart = document.querySelector(".heart");

// landmark_like.addEventListener("mouseover", function () {
//   heart.style.fill = "#d7443e";
// });
// landmark_like.addEventListener("mouseout", function () {
//   heart.style.fill = "black";
// });

// landmarks pin and testing interaction
var pin_1 = document.querySelector("#pin_1");
var pin_2 = document.querySelector("#pin_2");
var pin_3 = document.querySelector("#pin_3");
var landmark_image = document.querySelector(".landmark_image");
var lisbon = document.querySelector(".landmark_image p");
var landmark_name = document.querySelector(".landmark_name");
var landmark_like = document.querySelector(".landmark_like");
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
var point = document.querySelector("#point");
var point_total = document.querySelector(".point_total");
var question_num = document.querySelector("#question_num");

//define values;
var score = 0;
var bool = true;
var setTime = null;
var question_num_initial = 1;
var count = 0;
var questionPass = 0;
var scoreEachLandmark = 0;
var bool1;
var landmarkCount;

//define result button and content
var result = document.querySelector("#result");
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

//landmark test button
landmark_test.addEventListener("click", landmarkTestFunction);
function landmarkTestFunction() {
  //link with countdown timer interaction
  bool1 = true;
  //again removing these things
  for (let i = 0; i < answer.length; i++) {
    answer[i].classList.remove("disable", "tick", "cross");
  }
  //show the content of question
  test.classList.remove("clearTest");
  ResultBox.style.display = "none";
  //show the testing box
  test_pos.style.display = "block";
  //show what is the first question appear on the box
  showTest(landmarkCount, count, totalQuestion[landmarkCount]);
}

// next button
next.addEventListener("click", function () {
  //show the next question each time when clicking the next button
  count++;
  showTest(landmarkCount, count, totalQuestion[landmarkCount]);
  //removing these things whenever user in the next question
  for (let i = 0; i < answer.length; i++) {
    answer[i].classList.remove("disable", "tick", "cross");
  }
  //set up when the result button replace the next button
  if (count == totalQuestion[landmarkCount] - 1) {
    result.style.display = "block";
    next.style.display = "none";
  }
});

//result button
result.addEventListener("click", function () {
  //clearing the question content
  test.classList.add("clearTest");
  //display result content
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

// get the user score if he successfully get the correct answer
for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", function () {
    //once select an answer, disable the landmark test button
    landmark_test.removeEventListener("click", landmarkTestFunction);

    //set up disableing timer count down
    if (bool1 == true) {
      second = 3;
      minute = 1;
      hour = 1;
      var timer = setInterval(countdownTimer, 1000);
      bool1 = false;
    }

    // setTimeout(function () {
    //   resultBox_countdown.innerHTML = "Next trial unlock";
    //   clearInterval(timer);
    //   landmark_test.addEventListener("click", landmarkTestFunction);
    // }, 10000);
    //get user answer and compare it with the correct answer

    let userSelect = this.innerHTML;
    let correctAnswer = allTest[landmarkCount][count].answer;
    if (userSelect == correctAnswer) {
      //add all the points together
      score = score + allTest[landmarkCount][count].point;
      //get total points just for this landmark
      scoreEachLandmark =
        scoreEachLandmark + allTest[landmarkCount][count].point;
      //get how many questions has passed
      questionPass++;
      //display all the points user has gained
      point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
      //add correct sign
      this.classList.add("tick");
      //removing available points from this question
      allTest[landmarkCount][count].point = 0;
    } else {
      //add wrong sign
      this.classList.add("cross");
    }
    //add disable thing so user won't able to click or select multiple answers
    for (let j = 0; j < answer.length; j++) {
      answer[j].classList.add("disable");
    }
  });
}

var second = 3;
var minute = 1;
var hour = 1;

function countdownTimer() {
  if (second <= 0) {
    if (minute <= 0) {
      if (hour <= 0) {
        resultBox_countdown.innerHTML = "Your Next trial has unlocked";
        landmark_test.addEventListener("click", landmarkTestFunction);
        clearInterval(timer);
      }
      minute = 2;
      hour--;
    }
    second = 3;
    minute--;
  }
  second--;
  resultBox_countdown.innerHTML =
    "Your next trial will be unlocked in " +
    hour +
    "h: " +
    minute +
    "m: " +
    second +
    "s";
}

//ladnmark 1
pin_1.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/Jerónimos_April_2009-4.jpg')";
  landmark_image.style.backgroundPosition = "-300px -100px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Mosteiro dos Jerónimos";
  landmarkCount = 0;

  //landmark like button
  var likeIt = false;
  landmark_like.addEventListener("click", function () {
    if (likeIt == false) {
      heart.style.fill = "#d7443e";
      likeIt = true;
      allTest[landmarkCount][0].like = true;
    } else {
      heart.style.fill = "black";
      likeIt = false;
    }
  });
};

pin_2.onclick = function () {
  landmark_image.style.backgroundImage =
    "url('../image/landmarks/photo-1562620287-9309c2d9a460-816x612.jpg";
  landmark_image.style.backgroundPosition = "-200px -130px";
  lisbon.style.display = "none";
  landmark_name.innerHTML = "Torre de Belém";
  // landmark_image.style.backgroundSize = "900px";
  landmarkCount = 1;
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
