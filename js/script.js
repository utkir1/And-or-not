var elnotebook = document.getElementById("notebook");
var elbook = document.getElementById("book");
var elcopybook = document.getElementById("copybook");
var elsick = document.getElementById("sick");

var elResultBtn = document.querySelector(".result-btn");
var elOutResult = document.querySelector(".result");
var elResultBox = document.querySelector(".result-box");
var message = "";

elResultBtn.addEventListener("click", function(e){
  e.preventDefault();

  var notebook = elnotebook.checked;
  var book = elbook.checked;
  var copybook = elcopybook.checked;
  var sick = elsick.checked;

  if((book && !copybook && !sick) || (!book && !sick && copybook) ||(!notebook)){
    message = "Dars qilamiz :)"
    elResultBox.classList.add("alert-success");
  }
  else{
    message = "Dars qilolmaysiz ekan :("
    elResultBox.classList.add("alert-danger");
  }
  elOutResult.textContent = message;
})