!function(global) {
    global.QRious = function(options) {
        var canvas = options.element;
        var ctx = canvas.getContext('2d');
        var img = document.getElementById('custom-qr-code');
        
        // Ensure high quality rendering
        ctx.imageSmoothingEnabled = false;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // If image is already fully loaded, it will draw synchronously
        if (img && img.complete) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        } else {
            // Fallback in case it's somehow not loaded yet
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    };
}(typeof window !== "undefined" ? window : this);
