window.onload = function() {
    var screenWidth = window.innerWidth;
    var zoomLevel;

    if (screenWidth < 600) {
        document.getElementById("githubimg").style.left = "250px"
        zoomLevel = 50; // Zoom de 50% para telas menores que 600 pixels de largura
    } else if (screenWidth >= 600 && screenWidth > 800) {
        document.getElementById("githubimg").style.left = "252%"
        zoomLevel = 67; // Zoom de 67% para telas entre 600 e 799 pixels de largura
    } else if (screenWidth >= 800 && screenWidth > 1200) {
        document.getElementById("githubimg").style.left = "250px"
        zoomLevel = 100; // Zoom de 100% para telas entre 800 e 1199 pixels de largura
    } else {
        document.getElementById("githubimg").style.left = "250px"
        zoomLevel = 150; // Zoom de 150% para telas maiores ou iguais a 1200 pixels de largura
    }

    document.body.style.zoom = zoomLevel + "%";
};
