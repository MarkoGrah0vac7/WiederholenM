function makeInvisible() {
    this.style.opacity = "0";
}

function removeSanta() {
    var imgSanta = document.getElementsByClassName("santa");
    for (let i in imgSanta) {
        imgSanta[i].addEventListener("click", makeInvisible);
    }
}
removeSanta();