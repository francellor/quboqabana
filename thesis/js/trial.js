var deluxe = document.getElementById("deluxe");
var standard = document.getElementById("standard");
var third = document.getElementById("super-deluxe");
var fourth = document.getElementById("family");
var selectRoom = document.getElementById("select-room");
var roomContainer = document.getElementById("room-container");
var deluxeContainer = document.getElementById("deluxe-container");
var standardContainer = document.getElementById("standard-container");

deluxe.addEventListener("click", showDeluxeRooms);
function showDeluxeRooms(){
  deluxeContainer.style.visibility = "visible";
  roomContainer.style.display = "none";
  selectRoom.innerHTML = "Select Room...";
}
standard.addEventListener("click", showStandardRooms);
function showStandardRooms(){
  standardContainer.style.visibility = "visible";
  roomContainer.style.display = "none";
  selectRoom.innerHTML = "Select Room...";
  deluxeContainer.style.display = "none";
}

var input = document.getElementsByClassName("customer_input");

var deluxeRooms = document.getElementsByClassName("deluxe-rooms");
var standardRooms = document.getElementsByClassName("standard-rooms");
standardContainer.addEventListener("click", showInput);
deluxeContainer.addEventListener("click", showInput);
function showInput(e){
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
      input[clickedItem].style.visibility = "visible";
  }
  e.stopPropagation();
  }
//hide input
  var cancel = document.getElementsByClassName("cancel");
function hideInput(){
  $(this).css('visibility', 'hidden');
}
  $(document).ready(function(){
    $('cancel').click(hideInput);
  });


//  deluxeRooms[].addEventListener("click", function(){
//    input.style.visibility = "visible";
//  });
