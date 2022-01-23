const closingButton = document.getElementById("close_area");
const closingPaginaton = document.getElementById("close_pagination");

closingButton.addEventListener("mouseover", showPagination);
closingButton.addEventListener("mouseleave", removePagination);

function showPagination() {
    closingPaginaton.classList.remove("hide");
    console.log("d");
}

function removePagination() {
    closingPaginaton.classList.add("hide");
    console.log("g");
}
