toogle = function(object) {
    //let a = document.getElementById("a")
    if (object.classList.contains("closed")) {
        object.classList.remove("closed")
    } else {
        object.classList += " closed"
    }
}