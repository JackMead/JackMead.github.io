$(document).ready(function(){
    var pixelsPerRow = 15;
    var numberRows = 15;
    var numberPixels = pixelsPerRow * numberRows;
    
    for (var i = 0; i < numberPixels; i++) {
        var pixelId = "pixelCheckbox" + i;
        $("#paint").append("<input type=\"checkbox\" class=\"pixelCheckbox\" id=\""+pixelId+"\"></input><label class=\"pixel\" for=\""+pixelId+"\"></label>");
    }
});