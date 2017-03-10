
//this is test program.
$(function () {
    "use strict";

    function sqrt (value) {
        return value * value;
    }

    function getMatch (input) {
        return input.match(/[a-z][a-z\d]{0,7}/i);
    }

    console.log(sqrt(6));
    console.log(sqrt(7));

    console.log(getMatch("a19U4rjL"));

    $('p').on('click', function () {
        $(this).html('<h3>アロー関数は使いどころに注意！(thisのスコープが変わるよ)</h3>');
        console.log(this);
    });
});


// $(function () {
//     var pass = 'a19U4rjL';
//     console.log(pass.match(/[a-z][a-z\d]{0,7}/i));
// });

