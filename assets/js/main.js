let top_button = document.getElementById("btn-back-to-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    } else {
        top_button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

top_button.addEventListener("click", topFunction);