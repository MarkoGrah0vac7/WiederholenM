

function giveEvent () {
    // take every element on the page with the ClassName "santa" and put it in a variable.
    var x = document.getElementsByClassName("santa");
    // as there are mor than 1 santas it makes automatically an ARRAY out of it.
    // var x = [ index 0 = santa, index 1 = santa, index 2 = santa, index 3 = santa]
    
    for (i=0 ; i<x.length; i++)

    for(let i in x) {
        x[i].addEventListener("click",removeItem)
        //x[0].addEventlistener("click", removeItem);
        //x[1].addEventlistener("click", removeItem);
        //x[2].addEventlistener("click", removeItem);
        //x[3].addEventlistener("click", removeItem);
    };
}
function removeItem () {
    this.style.opacity= "0";
}
giveEvent ();