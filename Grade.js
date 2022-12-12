function grading() {
    var val1 = parseInt(document.getElementById("num1").value);
    var val2 = parseInt(document.getElementById("num2").value);
    var val3 = parseInt(document.getElementById("num3").value);
    var val4 = parseInt(document.getElementById("num4").value);

    var final = val1 + val2 + val3 + val4;
    document.getElementById("result").innerHTML = +final  + " / 400 ";
}

function average() {
    var val1 = parseInt(document.getElementById("num1").value);
    var val2 = parseInt(document.getElementById("num2").value);
    var val3 = parseInt(document.getElementById("num3").value);
    var val4 = parseInt(document.getElementById("num4").value);

    var final1 = val1 + val2 + val3 + val4; 
    var total = final1 / 4;
    document.getElementById("avrg").innerHTML = +total;
}