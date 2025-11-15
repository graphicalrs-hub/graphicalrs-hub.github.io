function showNav() {
    var menu = document.getElementById("menu");
    if (menu.style.height === "0px" || menu.style.height === "") {
        menu.style.height = '300px';
        menu.style.border = '#E43A56 2px solid';
        menu.style.padding = '40px';
    } else {
        menu.style.height = '0px';
        menu.style.padding = '0';
        menu.style.border = 'transparent';
    }
}

// Zatvori meni kada klikneš bilo koji link
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("#menu a");
    links.forEach(function(link) {
        link.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            menu.style.height = "0px";
            menu.style.padding = "0";
            menu.style.border = "transparent";
        });
    });
});