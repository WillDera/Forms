function showAvg() {
  var name = document.getElementById("Name").value;
  var f1 = document.getElementById("f1").value;
  var f2 = document.getElementById("f2").value;
  var f3 = document.getElementById("f3").value;
  var f4 = document.getElementById("f4").value;
  var f5 = document.getElementById("f5").value;
  var f6 = document.getElementById("f6").value;
  var f7 = document.getElementById("f7").value;
  var f8 = document.getElementById("f8").value;
  var f9 = document.getElementById("f9").value;
  var f10 = document.getElementById("f10").value;
  var f11 = document.getElementById("f11").value;
  var f12 = document.getElementById("f12").value;
  var f13 = document.getElementById("f13").value;
  var f14 = document.getElementById("f14").value;
  var f15 = document.getElementById("f15").value;
  var f16 = document.getElementById("f16").value;
  var f17 = document.getElementById("f17").value;
  var f18 = document.getElementById("f18").value;

  var cla = document.getElementById("sel").value;

  var final = parseInt(+f1 + +f2 + +f3 + +f4 + +f5 + +f6 + +f7 + +f8 + +f9 + +f10 + +f11 + +f12 + +f13 + +f14 + +f15 + +f16 + +f17 + +f18);

  var average = final / 18;
  if (average > 0 && average < 20) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>This is a very poor score, you can do it.. Try Again!</i>");
  } else if (average > 20 && average < 40) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>An " + "<b>E</br>" + " isn't too bad, but it needs serious attention.. Aim higher</i>");
  } else if (average > 40 && average < 55) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<i>A " + "<b>D</b>" + " isn't bad, but why not " + "C" + " .. Aim higher</i>");
  } else if (average > 55 && average < 70) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>A " + "<b>C</b>" + " is nice, but it won't harm if you had a " + "<b>B</b>" + " .. Aim higher</i>");
  } else if (average > 70 && average < 85) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>A " + "<b>B</b>" + " is wonderful, just push a little harder and Volla.. An " + "<b>A</b>" + " .. What do you think?</i>");
  } else if (average > 85 && average < 100) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>An " + "<b>A</b>" + "... Awesome!!! " + "Now Do Not Let Your Rivals Over Throw You!</i>");
  } else if (average === 100) {
    document.write(name + " of " + cla + "," + " Your average = " + average + "<br>" + "<i>This is Above-Human Intelligence... You had no Mercy and for that, my hat is off for you... Don't Relent</i>");
  } else {
    return null;
  }
}
showAvg();
