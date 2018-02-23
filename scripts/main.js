$(document).ready(function(){
    var pixelsPerRow = 25;
    var numberRows = 15;
    var numberPixels = pixelsPerRow * numberRows;
    
    for (var i = 0; i < numberPixels; i++) {
        var pixelId = "pixelCheckbox" + i;
        $("#pixel-container").append("<input type=\"checkbox\" class=\"pixel-checkbox\" id=\""+pixelId+"\"></input><label class=\"pixel\" for=\""+pixelId+"\"></label>");
    }
});