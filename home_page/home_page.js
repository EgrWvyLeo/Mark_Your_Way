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
var pin = document.querySelectorAll("div[id^='pin']");
// var pin = document.querySelectorAll(".pin");
var clearStatus = false;
var likeCondition = false;

//like and default buttons
like.addEventListener("click", function () {
  if (likeCondition == false) {
    likeCondition = true;
    like.innerHTML = "Default";
    for (let i = 0; i < pin.length; i++) {
      if (allTest[i][0].like == true) {
        pin[i].style.backgroundColor = "#FFD700";
      }
    }
  } else {
    likeCondition = false;
    like.innerHTML = "Like";
    for (let j = 0; j < pin.length; j++) {
      pin[j].style.backgroundColor = "rgb(85, 221, 255)";
    }
  }
});

//the hide and show buttons
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

// define landmark
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

//close button
test_close.onclick = function () {
  //determine when to show the description for each landmark
  if (allTest[landmarkCount][0].lock == 0) {
    landmarkDescription.innerHTML = allTest[landmarkCount][0].description;
  }
  //each test trial reducing individual question points
  if (pointReduce == true) {
    pointReduce = false;
    for (let i = 0; i < allTest[landmarkCount].length; i++) {
      allTest[landmarkCount][i].point -= 1;
      if (allTest[landmarkCount][i].point < 0) {
        allTest[landmarkCount][i].point = 0;
      }
    }
  }
  //other small things
  test_pos.style.display = "none";
  count = 0;
  result.style.display = "none";
  next.style.display = "block";
  scoreEachLandmark = 0;
  questionPass = 0;
};

// get all the tests from array allTest (in another js file)
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
  //remove result content
  ResultBox.style.display = "none";
  //show the testing box
  test_pos.style.display = "block";
  //show what is the first question appear on the box
  showTest(landmarkCount, count, allTest[landmarkCount][0].quantity);
}

// next button
next.addEventListener("click", function () {
  //show the next question each time when clicking the next button
  count++;
  showTest(landmarkCount, count, allTest[landmarkCount][0].quantity);
  //removing these things whenever user in the next question
  for (let i = 0; i < answer.length; i++) {
    answer[i].classList.remove("disable", "tick", "cross");
  }
  //set up when the result button replace the next button
  if (count == allTest[landmarkCount][0].quantity - 1) {
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
    allTest[landmarkCount][0].quantity +
    " questions";
  resultBox_scoreBoard.innerHTML =
    "You get total " + scoreEachLandmark + " points for this landmark";
});

// get the user score if he successfully get the correct answer
var pointReduce = false;
for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", function () {
    pointReduce = true;
    //get user answer and compare it with the correct answer
    let userSelect = this.innerHTML;
    let correctAnswer = allTest[landmarkCount][count].answer;
    if (userSelect == correctAnswer) {
      //add all the points together
      score += allTest[landmarkCount][count].point;
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
      //reducing the lock
      allTest[landmarkCount][0].lock -= 1;
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

//set up random daily points timer
var second = 60;
var minute = 59;
var hour = 23;
var timer;

var pointDaily = document.querySelector(".pointDaily");
var getPointDaily = document.querySelector(".getPointDaily");

getPointDaily.addEventListener("click", function () {
  second = 60;
  minute = 59;
  hour = 23;
  score += Math.floor(Math.random() * 10 + 1);
  point_total.innerHTML = "&nbsp;Total Points:&nbsp;" + score + "&nbsp;";
  timer = setInterval(countdownTimer, 1000);
  getPointDaily.style.display = "none";
  pointDaily.style.display = "block";
});

pointDaily.innerHTML =
  "Grab next points in " + hour + "h: " + minute + "m: " + second + "s";

function countdownTimer() {
  pointDaily.innerHTML =
    "Grab next points in " + hour + "h: " + minute + "m: " + second + "s";
  if (second <= 0) {
    if (minute <= 0) {
      if (hour <= 0) {
        pointDaily.style.display = "none";
        getPointDaily.style.display = "block";
        return clearInterval(timer);
      }
      minute = 60;
      hour--;
    }
    second = 60;
    minute--;
  }
  second--;
}

//individual landnmark
var landmarkDescription = document.querySelector(".landmarkDescription");

pin_1.addEventListener("click", function () {
  landmarkCount = 0;
  landmark_image.style.backgroundPosition = "-300px -100px";
});
pin_2.addEventListener("click", function () {
  landmarkCount = 1;
  landmark_image.style.backgroundPosition = "-200px -130px";
});
pin_3.addEventListener("click", function () {
  landmarkCount = 2;
  landmark_image.style.backgroundPosition = "-100px -130px";
});
pin_4.addEventListener("click", function () {
  landmarkCount = 3;
  landmark_image.style.backgroundPosition = "-100px -50px";
});
pin_5.addEventListener("click", function () {
  landmarkCount = 4;
  landmark_image.style.backgroundPosition = "-100px -50px";
});
pin_6.addEventListener("click", function () {
  landmarkCount = 5;
  landmark_image.style.backgroundPosition = "-100px -50px";
});

//set up a system of each landmark pin click event
for (let i = 0; i < pin.length; i++) {
  pin[i].addEventListener("click", function () {
    lisbon.style.display = "none";
    landmark_image.style.backgroundImage = allTest[landmarkCount][0].img;
    landmark_name.innerHTML = allTest[landmarkCount][0].name;

    //reset the landmark like button each time switching to a new landmark, and then reconsider if
    likeIt = false;
    heart.style.fill = "black";
    if (allTest[landmarkCount][0].like == true) {
      likeIt = true;
      heart.style.fill = "#d7443e";
    }

    //solve the problem of one landmark description appear on all the landmark
    if (allTest[landmarkCount][0].lock == 0) {
      landmarkDescription.innerHTML = allTest[landmarkCount][0].description;
    } else {
      landmarkDescription.innerHTML =
        "Get one question correct to unlock this landmark description";
    }
  });
}

//landmark like button
var heart = document.querySelector(".heart");
var likeIt = false;
landmark_like.addEventListener("click", function () {
  if (likeIt == false) {
    heart.style.fill = "#d7443e";
    likeIt = true;
    allTest[landmarkCount][0].like = true;
  } else {
    heart.style.fill = "black";
    likeIt = false;
    allTest[landmarkCount][0].like = false;
  }
});
