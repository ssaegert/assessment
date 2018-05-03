(function() {
        "use strict";

        var counter = 0;
        var interval = 1;

        var intervalId = setInterval (function updateTimer() {
            {
                if (counter == 1.423) {
                    clearInterval(intervalId);
                } else if (counter <= 1423) {
                    document.getElementById('counter').innerHTML = counter;
                }
                counter++;
            }
        }, interval);


    // function barWidth() {
    //     var elem = document.getElementById("bar");
    //     var width = 0;
    //     var id = setInterval(frame, 5);
    //     function frame() {
    //         if (width == 100) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style = width + '%';
    //         }
    //     }
    // }

})();