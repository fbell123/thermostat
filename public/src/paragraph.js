var paragraph = document.getElementById("paragraph"),
    string = paragraph.innerHTML;

paragraph.innerHTML = '';
string.split("");

function getRandomColor () {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

for (i=0; i < string.length; i++) {
  var hues = [getRandomColor(), getRandomColor()];
    paragraph.innerHTML += "<span>" + string[i] + "</span>";
    var spans = document.getElementsByTagName('span');
    spans[i].style.fontSize = Math.floor(Math.random() * (64 - 12 + 12)) + 12 + "px";
    spans[i].style.backgroundColor = hues[0];
    spans[i].style.color = hues[1];
}
