function grader (scores) {
  var total = 0;
  
  for(var i = 0;i < scores.length;i++) {
    total += scores[i];
  }

  return Math.round(total / scores.length);
};

console.log("The average score is: " + grader([45,96,27,23,55,75,100,95,84,82,75]) + "%");
