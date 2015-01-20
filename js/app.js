window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

}

var h1s = [].slice.call(document.querySelectorAll('h1'));


setInterval(function() {
    var now = new Date();
    var x = now.getSeconds()
    if (x < 10) {
        x = "0" + x.toString()
    }
    var y = now.getMinutes()
    if (y < 10) {
        y = "0" + y.toString()
    }
    var z = now.getHours()
    if (z < 10) {
        z = "0" + z.toString()
    }
    var parts = [z, y, x]
        //test number for zeros below 10.



    h1s.forEach(function(el) {
        el.innerHTML = parts.join(":")
    })

}, 1 * 1000)


var Container = (document.querySelector('div.container'));
// var output = document.getElementById('output')  
setInterval(function() {
    var now = new Date();
    //find hex value of RGB colors.
    {
        // body...
    }
    //find hex value of h 0-23.
    var h = now.getHours()

    var red = Math.round(h / 24 * 255);

    // find hex value of min 0-59.
    var m = now.getMinutes()

    var green = Math.round(m / 60 * 255);

    //find hex value of sec 0-59.
    var s = now.getSeconds()


    var blue = Math.round(s / 60 * 255);


    // console.log('HEX m:'+ green + '| s:' + blue + '/// TIME' + m + ':'+ s)

    // var parts = [now.getHours(), now.getMinutes(), now.getSeconds()]
    var parts = [red, green, blue].join('')
        //convert into background-color value.

    // var backgroundColor = "#" + red + green + blue 
    var backgroundColor = "rgb" + "(" + red + "," + green + "," + blue + ")"
        //set interval at every min.
    Container.setAttribute('style', ('background-color: ' + backgroundColor))


}, 1 * 1000)



// function("from range"59, "to range"255, "value"30) ---> 128 [Goal]
