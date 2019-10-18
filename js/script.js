window.onscroll = function () {
    myFunction()
};
var header = document.getElementById("header");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}
