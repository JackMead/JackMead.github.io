$(document).ready(function(){
    var numberOfPixels = 400;

    for (var i = 0; i < numberOfPixels; i++) {
        var pixelId = "pixelCheckbox" + i;
        $("#paint").append("<input type=\"checkbox\" class=\"pixelCheckbox\" id=\""+pixelId+"\"></input><label class=\"pixel\" for=\""+pixelId+"\"></label>");
    }
});