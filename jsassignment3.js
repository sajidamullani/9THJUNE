<!DOCTYPE html>
<html>
<body>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p>If the number is greater than 100 (the input's max attribute), an error message will be displayed.</p>

<p id="demo"></p>

<p>Enter a number and click OK rangeUnderflow:</p>

<input id="id2" type="number" min="100">
<button onclick="myFunction1()">OK</button>

<p>If the number is less than 100 (the input's min attribute), an error message will be displayed.</p>

<p id="demo1"></p>


<p>Enter a number and click OK:</p>

<input id="id3" type="number" min="100" max="300" required>
<button onclick="myFunction3()">OK</button>

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

<p id="demo"></p>



<script>
function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeOverflow) {
    txt = "Value too large";
  } else {
    txt = "Input OK";
  } 
  document.getElementById("demo").innerHTML = txt;
}

function myFunction1() {
  var txt = "";
  if (document.getElementById("id2").validity.rangeUnderflow) {
    txt = "Value too small";
  } else {
    txt = "Input OK";
  } 
  document.getElementById("demo1").innerHTML = txt;
}

function myFunction3() {
  var inpObj = document.getElementById("id3");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo3").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo3").innerHTML = "Input OK";
  } 
} 
</script>

</body>
</html>

