let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumber = dodger.style.left.replace("px", "");
  let left = parseInt (leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let rightNumber = dodger.style.right.replace("px", "");
  let right = parseInt (rightNumbers, 10);
  
  if (right > 0) {
    dodger.style.right = `${right - 1}px`;
  }
}


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

document.addEventListener("keydown", function(d) {
  if (d.key === "ArrowRight") {
    moveDodgerRight();
  }
})