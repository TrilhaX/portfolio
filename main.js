window.onload = function() {
    var screenWidth = window.innerWidth;
    var zoomLevel;
    var fimap = document.getElementsByClassName("fimap");
    var sobremim = document.getElementsByClassName("sobremim");

    if (screenWidth < 600) {
        document.getElementById("githubimg").style.left = "290%"
        document.getElementById("githubimg").style.top = "-370%"
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "24%"
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "16%"
        }
        zoomLevel = 50; // Zoom de 50% para telas menores que 600 pixels de largura
    } else if (screenWidth >= 600 && screenWidth > 800) {
        document.getElementById("githubimg").style.left = "270%"
        document.getElementById("githubimg").style.top = "-350%"
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "26%"
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "22%"
        }
        zoomLevel = 67; // Zoom de 67% para telas entre 600 e 799 pixels de largura
    } else if (screenWidth >= 800 && screenWidth > 1200) {
        document.getElementById("githubimg").style.left = "250%"
        document.getElementById("githubimg").style.top = "-330%"
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "28%"
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "28%"
        }
        for (var i = 0; i < inicio.length; i++){
            inicio[i].style.top = "-150%"
        }
        zoomLevel = 100; // Zoom de 100% para telas entre 800 e 1199 pixels de largura
    } else {
        document.getElementById("githubimg").style.left = "230%"
        document.getElementById("githubimg").style.top = "-310%"
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "30%"
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "34%"
        }
        zoomLevel = 150; // Zoom de 150% para telas maiores ou iguais a 1200 pixels de largura
    }

    document.body.style.zoom = zoomLevel + "%";
};
