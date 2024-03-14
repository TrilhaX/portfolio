window.onload = function() {
    var screenWidth = window.innerWidth;
    var zoomLevel;
    var fimap = document.getElementsByClassName("fimap");
    var sobremim = document.getElementsByClassName("sobremim");
    var inicioap = document.getElementsByClassName("inicioap");

    if (screenWidth < 1) {
        document.getElementById("githubimg").style.left = "290%";
        document.getElementById("githubimg").style.top = "-370%";
        document.getElementById("logo").style.top = "-213%";
        document.getElementById("inicio").style.top = "-179%";
        document.getElementById("projetos").style.top = "-177.7%";
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "24%";
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "16%";
        }
        for (var i = 0; i < inicioap.length; i++){
            inicioap[i].style.top = "17%";
        }
        zoomLevel = 50; // Zoom de 50% para telas menores que 600 pixels de largura
    } else if (screenWidth >= 1 && screenWidth < 200) {
        document.getElementById("githubimg").style.left = "270%";
        document.getElementById("githubimg").style.top = "-350%";
        document.getElementById("logo").style.top = "-185%";
        document.getElementById("inicio").style.top = "-177%";
        document.getElementById("projetos").style.top = "-176%";
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "26%";
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "22%";
        }
        for (var i = 0; i < inicioap.length; i++){
            inicioap[i].style.top = "16.5%";
        }
        zoomLevel = 67; // Zoom de 67% para telas entre 600 e 799 pixels de largura
    } else if (screenWidth >= 200 && screenWidth < 1200) {
        document.getElementById("githubimg").style.left = "250%";
        document.getElementById("githubimg").style.top = "-330%";
        document.getElementById("logo").style.top = "-157%";
        document.getElementById("inicio").style.top = "-175%";
        document.getElementById("projetos").style.top = "-174.3%";
        for (var i = 0; i < fimap.length; i++){
            fimap[i].style.top = "28%";
        }
        for (var i = 0; i < sobremim.length; i++){
            sobremim[i].style.height = "28%";
        }
        for (var i = 0; i < inicioap.length; i++){
            inicioap[i].style.top = "16%";
        }
        zoomLevel = 100; // Zoom de 100% para telas entre 800 e 1199 pixels de largura
    }

    document.body.style.zoom = zoomLevel + "%";
};
