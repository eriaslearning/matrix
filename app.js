const closingButton = document.getElementById("close_area");
const closingPaginaton = document.getElementById("close_pagination");
const openingBox = document.getElementById("opening_box");
const mainBox = document.getElementById("box");

closingButton.addEventListener("mouseover", showPagination);
closingButton.addEventListener("mouseleave", removePagination);
closingButton.addEventListener("click", toggleMainBox);
openingBox.addEventListener("click", toggleMainBox);

function showPagination() {
  closingPaginaton.classList.remove("hide");
  console.log("d");
}

function removePagination() {
  closingPaginaton.classList.add("hide");
  console.log("g");
}
var showBox = true;
function toggleMainBox() {
  if (showBox) {
    // mainBox.classList.add("boxAnimationOut");
    mainBox.style.animation = "boxAnimationOut 1s ease-in 0s 1 normal forwards";
    console.log("f");
    showBox = false;
  } else if (!showBox) {
    mainBox.style.animation = "boxAnimationIn 1s ease-out 0s 1 normal forwards";
    showBox = true;
  }
}
