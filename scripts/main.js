$(document).ready(function () {
    var pixelsPerRow = 25;
    var numberRows = 15;
    var numberPixels = pixelsPerRow * numberRows;
    var outputScale = 10;
    var keyCodesTyped = 0;
    var secretCode = [113, 119, 101, 114, 116,121];

    for (var i = 0; i < numberPixels; i++) {
        var pixelId = "pixel-checkbox-" + i;
        $("#pixel-container").append("<input type=\"checkbox\" class=\"pixel-checkbox\" id=\"" + pixelId + "\"></input><label class=\"pixel\" for=\"" + pixelId + "\"></label>");
    }

    $(function () {
        $(window).keypress(function (e) {
            var key = e.which;
            if (key === secretCode[keyCodesTyped]) {
                keyCodesTyped++;
                console.log("SEEN!");
                if (keyCodesTyped === secretCode.length) {
                    keyCodesTyped = 0;
                    drawAMessage();
                }
            }
        });
    });

    function drawAMessage() {
        //Secret mechanics, do not look
        var pixelsToColor = [0,2,4,5,6,8,10,14,16,18,20,22,23,24,26,29,31,33,35,39,41,43,45,47,49,51,54,55,56,58,59,60,65,67,70,72,74];
        pixelsToColor.forEach(pixelId => {
            pixelId += 125;
            if (pixelId % 25 < 12) {
                pixelId++;
            } else {
                pixelId--;
            }
            $("#pixel-checkbox-" + pixelId).trigger('click');
        });
    }

    $(".btn").click(() => {
        var blob = base64ToBlob(getPixels().getBase64(), "image/png");
        window.open(URL.createObjectURL(blob));
    });

    function getPixels() {
        var pngMaker = new PNGlib(pixelsPerRow * 10, numberRows * 10, 256);
        var chosenColor = getColor(pngMaker);
        var defaultColor = pngMaker.color(0, 0, 0, 0);

        for (let i = 0; i < numberPixels; i++) {
            if (isPixelChecked(i)) {
                colorBlock(pngMaker, i, chosenColor);
            } else {
                colorBlock(pngMaker, i, defaultColor);
            }
        }
        return pngMaker;
    }

    function colorBlock(pngMaker, i, color) {
        var row = Math.floor(i / pixelsPerRow);
        var col = i % pixelsPerRow;
        for (var rowToColor = row*outputScale; rowToColor < (row+1)*outputScale; rowToColor++) {
            for (var colToColor = col*outputScale; colToColor < (col+1)*outputScale; colToColor++) {
                pngMaker.buffer[pngMaker.index(colToColor, rowToColor)] = color;
            }
        }
    }

    function isPixelChecked(i) {
        var pixelId = "#pixel-checkbox-" + i;
        return $(pixelId).is(":checked");
    }

    function getColor(pngMaker) {
        if ($("#black").is(":checked")) {
            return pngMaker.color(0, 0, 0, 255);
        }
        if ($("#blue").is(":checked")) {
            return pngMaker.color(0, 0, 255, 255);
        }
        return pngMaker.color(255, 0, 0, 255);
    }

    function base64ToBlob(base64String, contentType) {
        var byteCharacters = atob(base64String);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: contentType });
    }
});