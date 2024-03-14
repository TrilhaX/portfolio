window.onload=function() {
    var screenWidth =
window.innerWidth;
    var zoomLevel;

    if (screenWidth < 800) {
        zoomLevel = 67
    } else {
        zoomLevel = 100;
    }
    document.body.style.zoom = zoomLevel + "%";
};