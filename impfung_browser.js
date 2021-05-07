
//var searchForText = 'Leipzig';
var searchForText = 'Annaberg';
var beepMilliseconds = 3000; // 3 seconds

function ready(callback) {
    // in case the document is already rendered
    if (document.readyState != 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
    });
}
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

ready(function () {

    var beep = (function () {
        var ctxClass = window.audioContext || window.AudioContext || window.AudioContext || window.webkitAudioContext
        var ctx = new ctxClass();
        return function (duration, type, finishedCallback) {

            duration = +duration;

            // Only 0-4 are valid types.
            type = (type % 5) || 0;

            if (typeof finishedCallback != "function") {
                finishedCallback = function () { };
            }

            var osc = ctx.createOscillator();

            osc.type = type;
            //osc.type = "sine";

            osc.connect(ctx.destination);
            if (osc.noteOn) osc.noteOn(0); // old browsers
            if (osc.start) osc.start(); // new browsers

            setTimeout(function () {
                if (osc.noteOff) osc.noteOff(0); // old browsers
                if (osc.stop) osc.stop(); // new browsers
                finishedCallback();
            }, duration);

        };
    })();

    setTimeout(function () {

        function wait() {
            var condition = contains('h1', searchForText) != null && contains('h1', searchForText).length > 0;
            if (!condition) {
                console.log('Wait...');
                setTimeout(wait, 100);
            } else {

                var hasImpfung = false;

                hasImpfung = contains('h1', searchForText)[0].parentNode.parentNode.children[1].children[0].children[0].innerHTML != '0';

                console.log('Has impfung? - ' + hasImpfung);

                if (hasImpfung) {
                    beep(beepMilliseconds, 2, function () { })
                }
            }
        }
        wait();

    }, 2000);
});


