$(document).ready(function () {
  renderMainPage();
});

function renderMainPage() {
  header();
  question();
  answers();
}

function header() {
  const HEADER = $(
    `<div id="header">
        <img src="./images/Header.png" alt="">
        </div>`
  );
  $("#app").append(HEADER);
}

function question() {
  const QUESTION = $(
    `<div id="question">
        <img src="images/q1.png" alt="">
        </div>`
  );
  $("#app").append(QUESTION);
}

function answers() {
  const ANSWER = $(
    `<div id="answerGroup">
        <img id="answer1" src="images/a1a.png" alt="">
        <img id="answer2" src="images/a1b.png" alt="">
        </div>`
  );

  $("#app").append(ANSWER);

  $("#answer1").click(() => {
    render2();
  });

  $("#answer2").click(() => {
    render2();
  });
}

// Render 2

function render2() {
  $("#question").remove();
  $("#answerGroup").remove();
  question2();
  answers2();
}

function question2() {
  const QUESTION = $(
    `<div id="question">
        <img src="images/q2.png" alt="">
        </div>`
  );
  $("#app").append(QUESTION);
}
function answers2() {
  const ANSWER = $(
    `<div id="answerGroup">
        <img id="answer1" src="images/a2a.png" alt="">
        <img id="answer2" src="images/a2b.png" alt="">
        </div>`
  );
  $("#app").append(ANSWER);

  $("#answer1").click(() => {
    render3();
  });

  $("#answer2").click(() => {
    render3();
  });
}

// Render 3

function render3() {
  $("#question").remove();
  $("#answerGroup").remove();
  question3();
  answers3();
}

function question3() {
  const QUESTION = $(
    `<div id="question">
        <img src="images/q3.png" alt="">
        </div>`
  );
  $("#app").append(QUESTION);
}
function answers3() {
  const ANSWER = $(
    `<div id="answerGroup">
        <img id="answer1" src="images/a3a.png" alt="">
        <img id="answer2" src="images/a3b.png" alt="">
        </div>`
  );
  $("#app").append(ANSWER);
  $("#answer1").click(() => {
    processing();
  });

  $("#answer2").click(() => {
    processing();
  });
}

/* render Processing / Loading */

function processing() {
  $("#question").remove();
  $("#answerGroup").remove();
  const PROCESSING = $(
    `<div id="processing">
        <img src="images/loading.png" alt="">
        </div>`
  );

  const myTimeout = setTimeout(randomizer, 5000);
  $("#app").append(PROCESSING);
}

/* responding to the user life change event */

function randomizer() {
  let randomNum = Math.floor(Math.random() * 3);
  $("#processing").remove();

  switch (randomNum) {
    case 0:
      solution1();
      break;
    case 1:
      solution2();
      break;
    case 2:
      solution3();
  }
}

const solution1 = function solution1() {
  const SOLUTION = $(
    `<div id="solutionGroup">
          <img id="solution1" src="images/s1.png" alt="">
          </div>`
  );

  $("#app").append(SOLUTION);

  $("#solution1").click(() => {
    wasClicked = true;
    console.log("first" + wasClicked);
    button();
  });

  console.log("second: " + wasClicked);
};

function solution2() {
  const SOLUTION = $(
    `<div id="solutionGroup">
          <img id="solution2" src="images/s2.png" alt="">
          </div>`
  );
  $("#app").append(SOLUTION);
  $("#solution2").click(() => {
    button();
  });
}

const solution3 = function solution3() {
  const SOLUTION = $(
    `<div id="solutionGroup">
          <img id="solution3" src="images/s3.png" alt="">
          </div>`
  );
  $("#app").append(SOLUTION);
  $("#solution3").click(() => {
    button();
  });
};

/* button to restart app */

function button() {
  document.getElementById("button");
  $("#processing").remove();
  $("#button").remove();

  const BUTTON = $(
    `<button id="button" onClick="document.location.reload(true);" type="button">Repetir!</button>`
  );

  $("#app").append(BUTTON);
}
