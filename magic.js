


var answers = ["Yup!", "Fuhgeddaboutit", "What would your mother do?", "Your answer here"];
function magic8() {



  document.getElementById("outputAnswer").innerHTML = answers[Math.floor(Math.random() * 3)];

  document.getElementById("outputQuestion").innerHTML  = document.getElementById("inputQuestion").value;
}
