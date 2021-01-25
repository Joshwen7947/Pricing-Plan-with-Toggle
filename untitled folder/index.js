let inp = document.getElementById("cmn-toggle-1");
inp.addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("par");
  if (x.innerHTML === "$199.99") {
    x.innerHTML = "$19.99";
  } else {
    x.innerHTML = "$199.99";
  }
}

let active = document.getElementsByClassName("cmn-toggle");
inp.addEventListener("click", myFunction);

function myFunction() {
  var x = document.getElementById("active");
  if (x.innerHTML === "$249.99") {
    x.innerHTML = "$24.99";
  } else {
    x.innerHTML = "$249.99";
  }
}
