var elem = document.getElementById("pageText"),
  keys = [];

function updateKeys(event) {
  console.log("key event");
  if (event.charCode) {
    var charCode = event.charCode;
  } else {
    var charCode = event.keyCode;
  }
  
  if(event.type == "keydown") {
    if(keys.indexOf(charCode) === -1) {
      keys.push(charCode);
    }
  } else {
    for(i = 0; i < keys.length; i++) {
      if(keys[i] == charCode) {
        keys.splice(i, 1);
        i--;
      }
    }
  }
  
  updateText();
}

function updateText() {
  if (keys.length == 0) {
    elem.innerHTML = "Press any key to view its keycode";
    elem.className = "centered instructions";
  } else {
    var text = "";
    for(i = 0; i < keys.length; i++) {
      text += String(keys[i]);
      if(i != keys.length - 1) {
        text += ", ";
      }
    }
    elem.innerHTML = text;
    elem.className = "centered";
  }
}

window.onload = updateText;
window.onkeyup = window.onkeydown = updateKeys;
