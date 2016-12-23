"use strict";

/** js6example.js on 12/22/2016. */

var add = function add(a, b) {
    return a + b;
};

var addit = function addit() {
    var a = parseInt(document.getElementById("add1").value);
    var b = parseInt(document.getElementById("add2").value);

    var x = add(a, b);
    document.getElementById("answer").innerHTML = x;
};