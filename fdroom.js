function selectroom(){
    document.getElementById('roomcontainer').style.display = 'none';
    document.getElementById('drooms').style.display = 'table';
}
function x(){
    document.getElementById('drooms').style.display = 'none';
    document.getElementById('roomcontainer').style.display = 'flex';
}
function myFunction(){
var x =  document.getElementById("access");
x.style.display = "block";

}
//Reference Id pop out
function accept(){
    var x = document.getElementsByClassName("customer_input");
  //  var i;
  //for (i = 0; i < x.length; i++) {
    x[0].style.display = "block";
  //]
}
/*var i;
for (i = 0; i < x.length; i++) {
x[0].style.display = "block";
}


//check in checkout color
/*function myFunction(){
  if (dr1.style.backgroundColor === "green") {
    document.getElementById("dr1").style.backgroundColor = "maroon";

  } else {
    document.getElementById("dr1").style.backgroundColor = "green";
  }
}
function myFunction1(){
  if (dr2.style.backgroundColor === "green") {
    document.getElementById("dr2").style.backgroundColor = "maroon";

  } else {
    document.getElementById("dr2").style.backgroundColor = "green";
  }
}
function myFunction2(){
  if (dr3.style.backgroundColor === "green") {
    document.getElementById("dr3").style.backgroundColor = "maroon";

  } else {
    document.getElementById("dr3").style.backgroundColor = "green";
  }
}
function myFunction3(){
  if (dr4.style.backgroundColor === "green") {
    document.getElementById("dr4").style.backgroundColor = "maroon";

  } else {
    document.getElementById("dr4").style.backgroundColor = "green";
  }
}
*/
