function puzzle1(x, y) {
  return (x + y).toString() + (y / x).toString() + (x * y).toString();
}

function register1() {
  var answerEntered = document.getElementById("answer");
  alert(answerEntered);
}

function validateAnswer1(x, y) {
  var answerEntered = document.getElementById("answer");

  if (answerEntered == puzzle1(6, 54)) {
    alert(answerEntered + " is correct!" + " Good Job!");
  } else {
    document.getElementById("answerError").innerHTML = "Invalid Answer";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    
    document.getElementById("answerTry").classList.remove("has-success");
    document.getElementById("answerTry").classList.add("has-error");
  }

  function puzzle2(x, y) {
    return (y - x).toString() + (x + y).toString() + (x * y).toString();
  }

  function register2() {
    var answerEntered = document.getElementById("answer");
    alert(answerEntered);
  }

  function validateAnswer2() {
    var answerEntered = document.getElementById("answer");
    if (answerEntered == puzzle2(22, 34)) {
      alert(answerEntered + "is correct" + "Good Job!)");
    } else {
      document.getElementById("answerError").innerHTML = "Invalid Answer";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
     
      document.getElementById("answerTry").classList.remove("has-success");
      document.getElementById("answerTry").classList.add("has-error");
    }
  }

  function puzzle3(x, y) {
    return (x * x).toString() + (y * y).toString() + (x * y).toString();
  }

  function register3() {
    var answerEntered = document.getElementById("answer");
    alert(answerEntered);
  }

  function validateAnswer3() {
    var answerEntered = document.getElementById("answer");
    if (answerEntered == puzzle2(22, 34)) {
      alert(answerEntered + "is correct" + "Good Job!)");
    } else {
      document.getElementById("answerError").innerHTML = "Invalid Answer";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      
      document.getElementById("answerTry").classList.remove("has-success");
      document.getElementById("answerTry").classList.add("has-error");
    }
  }
}
//** Kelsea Kennedy **//
