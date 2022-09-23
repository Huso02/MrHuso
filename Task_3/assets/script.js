
function showComment() {
    if (window.innerWidth > 1099) {
        var element = document.getElementById("hidden");

        if (element.style.visibility == "hidden") {
            element.style.visibility = "visible";
        } else {
            element.style.visibility = "hidden";
        }
    }else{
        return false;
    }
}


// ----------------------------------------------




