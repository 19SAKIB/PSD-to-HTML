let btn = document.getElementById("mybtn");
let sect = document.getElementById("section1")


window.addEventListener("scroll", function () {

    sect.classList.toggle("sticky", window.scrollY > 0);

});


