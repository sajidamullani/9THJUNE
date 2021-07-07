console.log("app.js started");
function myvalidate() 
{
  console.log("app.js started"); 
  if (document.getElementById("name").validity.valueMissing) {
    window.alert("Please enter your name.");
  } 

  if (document.getElementById("email").validity.typeMismatch) {
    window.alert("Please enter Email here.");
  } 
  if (document.getElementById("userName").validity.valueMissing) {
    window.alert("Please enter your userName.");
  } 
  if (document.getElementById("mobile").validity.valueMissing) {
    window.alert("Please enter your mobile.");
  } 
  if (document.getElementById("Address").validity.valueMissing) {
    window.alert("Please enter your Address.");
  }
 
}