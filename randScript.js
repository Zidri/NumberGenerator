var $list = '';


function randGen() {

    var $min = document.forms["rangeForm"]["min"].value;
    var $max = document.forms["rangeForm"]["max"].value;

    if ($min != null && $max != null && $min < $max) {

        //random number with min and max
        var $rand = Math.floor(Math.random() * (parseInt($max) - parseInt($min))) + parseInt($min) + 1;

        document.getElementById("randNumber").innerHTML = $rand;

        document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}