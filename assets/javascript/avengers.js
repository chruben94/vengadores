var area = $("#triviaArea");

//questions Array
var questions = [{

    question: "1) In the 2012 movie, The Avengers features Catptain America. What is his real name?",
    choices: ["Buck Rogers", "Ted Rogers", "Steve Rogers", "Tony Stark"],
    answer: "Steve Rogers"
    },{

    question: "2) Who is the leader of S.H.I.E.L.D?",
    choices: ["Nick Fury", "Tony Stark", "Bruce Banner", "Diana Prince"],
    answer: "Nick Fury"
    },{

    question: "3) Which superhero does Bruce Banner transform into?",
    choices: ["Iron Man", "Hawkeye", "Thor", "Hulk"], 
    answer: "Hulk"
    },{

    question: "4) Who is Thor's adoptive brother?",
    choices: ["Loki", "Tony Stark", "Peter Parker", "Bruce Wayner"],
    answer: "Loki"
    },{

    question: "5) What's the name of the mysterious blue glowing cube that Loki uses as a weapon?",
    choices: ["The Orb", "Tesseract", "The Force", "UV Lamp"], 
    answer: "Tesseract"
    },{

    question: "6) In which US City do the Avengers battle the Chitauri?",
    choices: ["Los Angeles", "New York City", "Washington DC", "Miami"],
    answer: "New York City"
    },{

    question: "7) Who diverts a nuclear missile into a wormhole and defeats the chituri army?",
    choices: ["Black Widow", "The Hulk", "Iron Man", "Thor"],
    answer: "Iron Man"
    },{

    question: "8) In Avenegers Infinity War, what is the name of the villain who's on a mission to collect all of the infinity stones?",
    choices: ["Malekith", "Thanos", "Darren Cross", "Ultron"],
    answer: "Thanos"
    },{

    question: "9) Who originally created the Avengers?",
    choices: ["Ant and Dec", "Stan Lee and Jack Kirby", "Paul Hollywood and Mary Beth", "Dennis and Gnasher"],
    answer: "Stan Lee and Jack Kirby"
    }
];
//---------------------------------------------------------------------------------------------------

var timer;

var trivia = {
  correct: 0,
  incorrect: 0,
  counter: 100,

  countdown: function() {
        trivia.counter--;
    $("#counter-number").html(trivia.counter);
    if (trivia.counter === 0) {
      trivia.done();
    }
  },

  start: function() {
    timer = setInterval(trivia.countdown, 1000);

    $("#wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>100</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      area.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].choices.length; j++) {
        area.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].choices[j] + "''>" + questions[i].choices[j]);
      }
    }

    area.append("<button id='done'>Done</button>");
  },


  done: function() {
    var input = area.children("input:checked");
    for (var i = 0; i < input.length; i++) {
      if ($(input[i]).val() === questions[i].answer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#wrapper h2").remove();

    area.html("<h2>You finished!</h2>");
    area.append("<h3>Correct Answers: " + this.correct + "</h3>");
    area.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


$(document).on("click", "#start", function() {
    trivia.start();
  });

$(document).on("click", "#done", function() {
  trivia.done();
});



