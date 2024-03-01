document.getElementById("calculate-btn").addEventListener("click", function() {
  var cmInput = parseFloat(document.getElementById("cm").value);
  var mmResult = cmInput * 10;
  document.getElementById("mm").value = mmResult;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("mm").value = "";
  document.getElementById("cm").value = "";
});
