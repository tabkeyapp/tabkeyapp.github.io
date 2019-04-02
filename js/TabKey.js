// Standard tuning array = ["E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb"]

var userInput = [];
var otherInput = [];
var fullAnswer = [0, 0, 0, 0, 0, 0, 0];
var theScale;
var findKey = findStandardKey();
var theMajor;
var theMinor;
var theNotes;
var moveLeft = document.querySelector("#tabViewDiv");
var n1, n2, n3, n4, n5, n6, n7; //  Guitar note variables
var np1, np2, np3, np4, np5, np6, np7; //  Piano note variables
var x;
var tuning;
var neckNotes = [gn0, gn1, gn2, gn3, gn4, gn5, gn6, gn7, gn8, gn9, gn10, gn11, gn12];
var nShift1, nShift2, nShift3, nShift4, nShift5, nShift6, nShift7;

/* Major keys in standard tuning
var cMajStandard = [0,1,3,5,7,8,10];
var gMajStandard = [0,2,3,5,7,8,10];
var dMajStandard = [0,2,3,5,7,9,10];
var aMajStandard = [0, 2, 4, 5, 7, 9, 10];
var eMajStandard = [0, 2, 4, 5, 7, 9, 11];
var bMajStandard = [0, 2, 4, 6, 7, 9, 11];
var fMajStandard = [0, 1, 3, 5, 6, 8, 10];
var bFlatMajStandard = [1, 3, 5, 6, 8, 10, 11];
var eFlatMajStandard = [1, 3, 4, 6, 8, 10, 11];
var aFlatMajStandard = [1, 3, 4, 6, 8, 9, 11];
var dFlatMajStandard = [1, 2, 4, 6, 8, 9, 11];
var gFlatMajStandard = [1, 2, 4, 6, 7, 9, 11];
*/

// Gets input from text box depending on ranges
// Pushes answer info to page and array
function guitarReceiver() {
  x = document.getElementById("userTextBox").value;
  if (userInput.length === 0) {
    n1 = x;
    if (x < 0 || x > 1) {
      swal("Please enter valid first note!");
    } else if (document.getElementById("list").value === "") {
      swal("Select a tuning!");
    } else if (document.getElementById("userTextBox").value === "") {
      swal("Enter a note!");
    } else {
      n1 = parseInt(n1);
      userInput.push(n1);
      document.getElementById("s1").innerHTML = n1;
    }
  } else if (userInput.length === 1) {
    n2 = x;
    if (x < 1 || x > 3 || (n2 - n1) > 2 || (n2 - n1) < 1) {
      swal("Please enter valid second note!");
    } else {
      n2 = parseInt(n2);
      userInput.push(n2);
      document.getElementById("s2").innerHTML = n2;
    }
  } else if (userInput.length === 2) {
    n3 = x;
    if (n3 > 6 || n3 < 3 || (n3 - n2) > 2 || (n3 - n2 < 1)) {
      swal("Please enter valid third note!");
    } else if ((n3 - n2) === 1 && (n2 - n1) === 1) {
      swal("Please enter valid third note!");
    } else {
      n3 = parseInt(n3);
      userInput.push(n3);
      document.getElementById("s3").innerHTML = n3;
    }
  } else if (userInput.length === 3) {
    n4 = x;
    if (n4 > 7 || n4 < 5 || (n4 - n3) > 2 || (n4 - n3) < 1) {
      swal("Please enter valid fourth note!");
    } else if ((n4 - n3) === 1 && (n3 - n2) === 1) {
      swal("Please enter valid fourth note!");
    } else {
      n4 = parseInt(n4);
      userInput.push(n4);
      document.getElementById("s4").innerHTML = n4;
    }
  } else if (userInput.length === 4) {
    n5 = x;
    if (n5 > 8 || n5 < 6 || (n5 - n4) > 2 || (n5 - n4) < 1) {
      swal("Please enter valid fifth note!");
    } else if ((n5 - n4) === 1 && (n4 - n3) === 1) {
      swal("Please enter valid fifth note!");
    } else if ((n5 - n4) === 2 && (n4 - n3) === 2 && (n3 - n2) === 2 && (n2 - n1) === 2) {
      swal("Please enter valid fifth note!");
    } else {
      n5 = parseInt(n5);
      userInput.push(n5);
      document.getElementById("s5").innerHTML = n5;
    }
  } else if (userInput.length === 5) {
    n6 = x;
    if (n6 > 10 || n6 < 8 || (n6 - n5 < 1) || (n6 - n5) > 2) {
      swal("Please enter valid sixth note!");
    } else if ((n6 - n5) === 1 && (n5 - n4) === 1) {
      swal("Please enter valid sixth note!");
    } else if ((n6 - n5) === 2 && (n5 - n4) === 2 && (n4 - n3) === 2 && (n3 - n2) === 2) {
      swal("Please enter valid fifth note!");
    } else {
      n6 = parseInt(n6);
      userInput.push(n6);
      document.getElementById("s6").innerHTML = n6;
    }
  } else if (userInput.length === 6) {
    n7 = x;
    if (n7 > 11 || n7 < 10 || (n7 - n6 < 1) || (n7 - n6 > 2)) {
      swal("Please enter valid last note!");
    } else if ((n7 - n6) === 1 && (n6 - n5) === 1) {
      swal("Please enter valid last note!");
    } else if ((n7 - n6) === 2 && (n6 - n5) === 2 && (n5 - n4) === 2 && (n4 - n3) === 2) {
      swal("Please enter valid last note!");
    } else {
      n7 = parseInt(n7);
      userInput.push(n7);
      document.getElementById("s7").innerHTML = n7;
      document.getElementById("s8").innerHTML = "";
      showKey();
      if (typeof theMajor === "undefined") {
        swal("Uh oh!  This scale isn't in a major key.");
        userInput = [];
        document.getElementById("majorBot").innerHTML = "";
        document.getElementById("minorBot").innerHTML = "";
        document.getElementById("s1").innerHTML = "-";
        document.getElementById("s2").innerHTML = "-";
        document.getElementById("s3").innerHTML = "-";
        document.getElementById("s4").innerHTML = "-";
        document.getElementById("s5").innerHTML = "-";
        document.getElementById("s6").innerHTML = "-";
        document.getElementById("s7").innerHTML = "-";
        document.getElementById("s8").innerHTML = "-";
        document.getElementById("majorBot").innerHTML = "";
        document.getElementById("minorBot").innerHTML = "";
      }
    }
  } else if (userInput.length > 6) {
    userInput = [];
    document.getElementById("s2").innerHTML = "-";
    document.getElementById("s3").innerHTML = "-";
    document.getElementById("s4").innerHTML = "-";
    document.getElementById("s5").innerHTML = "-";
    document.getElementById("s6").innerHTML = "-";
    document.getElementById("s7").innerHTML = "-";
    document.getElementById("s8").innerHTML = "-";
    if (x < 0 || x > 1) {
      swal("Please enter valid first note!");
    } else {
      n1 = x;
      n1 = parseInt(n1);
      userInput.push(n1);
      document.getElementById("s1").innerHTML = n1;
    }
  }
}

//  Sorts user input for alternate tunings
//  12 notes make an octave
function sortNumber(a, b) {
  return a - b;
}

function cToStandard() {
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] -= 4;
    if (userInput[i] < 0) {
      userInput[i] += 12;
    }
  }
  userInput.sort(sortNumber);
  console.log(userInput);
}

function cSharpToStandard() {
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] -= 3;
    if (userInput[i] < 0) {
      userInput[i] += 12;
    }
  }
  userInput.sort(sortNumber);
  console.log(userInput);
}

function dToStandard() {
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] -= 2;
    if (userInput[i] < 0) {
      userInput[i] += 12;
    }
  }
  userInput.sort(sortNumber);
  console.log(userInput);
}

function halfToStandard() {

  for (var i = 0; i < userInput.length; i++) {
    userInput[i] -= 1;
    if (userInput[i] < 0) {
      userInput[i] += 12;
    }
  }
  userInput.sort(sortNumber);
}

function pianoToStandard() {
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] -= 5;
    if (userInput[i] < 0) {
      userInput[i] += 12;
    } else if (userInput[i] === "0") {
      userInput[i] = 12;
    }
  }
  userInput.sort(sortNumber);
}

//  Displays the major and minor keys in divs based on tuning
function showKey() {
  if (tuning === "E") {
    findStandardKey();
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;

  } else if (tuning === "D#") {
    halfToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");

    }
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;

  } else if (tuning === "D") {
    dToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");

    }
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;
  } else if (tuning === "dropD") {
    dToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");

    }
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;
  } else if (tuning === "C#") {
    cSharpToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    }
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;
  } else if (tuning === "C") {
    cToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    }
    document.getElementById("majorBot").innerHTML = theMajor;
    document.getElementById("minorBot").innerHTML = theMinor;
  } else if (tuning === "") {
    userInput = [];
  }
}

function showPianoKey() {
  pianoToStandard();
  findStandardKey();
  document.getElementById("majorBotP").innerHTML = theMajor;
  document.getElementById("minorBotP").innerHTML = theMinor;
}

// Tuning click change updates Tab View diagram with selection
function keyChange() {
  if (document.getElementById("list").value === "E") {
    document.getElementById("gs1").innerHTML = " e";
    document.getElementById("gs2").innerHTML = " B";
    document.getElementById("gs3").innerHTML = " G";
    document.getElementById("gs4").innerHTML = " D";
    document.getElementById("gs5").innerHTML = " A";
    document.getElementById("note").innerHTML = " E";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "0px";
  } else if (document.getElementById("list").value === "D#") {
    document.getElementById("gs1").innerHTML = "d#";
    document.getElementById("gs2").innerHTML = "A#";
    document.getElementById("gs3").innerHTML = "F#";
    document.getElementById("gs4").innerHTML = " C#";
    document.getElementById("gs5").innerHTML = " G#";
    document.getElementById("note").innerHTML = "D#";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "0px";
  } else if (document.getElementById("list").value === "D") {
    document.getElementById("gs1").innerHTML = " d";
    document.getElementById("gs2").innerHTML = " A";
    document.getElementById("gs3").innerHTML = " F";
    document.getElementById("gs4").innerHTML = " C";
    document.getElementById("gs5").innerHTML = " G";
    document.getElementById("note").innerHTML = " D";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "0px";
  } else if (document.getElementById("list").value === "dropD") {
    document.getElementById("gs1").innerHTML = " e";
    document.getElementById("gs2").innerHTML = " B";
    document.getElementById("gs3").innerHTML = " G";
    document.getElementById("gs4").innerHTML = " D";
    document.getElementById("gs5").innerHTML = " A";
    document.getElementById("note").innerHTML = " D";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "0px";
  } else if (document.getElementById("list").value === "C#") {
    document.getElementById("gs1").innerHTML = "d#";
    document.getElementById("gs2").innerHTML = "A#";
    document.getElementById("gs3").innerHTML = "F#";
    document.getElementById("gs4").innerHTML = "C#";
    document.getElementById("gs5").innerHTML = "G#";
    document.getElementById("note").innerHTML = "C#";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "-0px";
  } else if (document.getElementById("list").value === "C") {
    document.getElementById("gs1").innerHTML = " d";
    document.getElementById("gs2").innerHTML = " A";
    document.getElementById("gs3").innerHTML = " F";
    document.getElementById("gs4").innerHTML = " C";
    document.getElementById("gs5").innerHTML = " G";
    document.getElementById("note").innerHTML = " C";
    tuning = document.getElementById("list").value;
    moveLeft.style.left = "0px";
  }
}

// User input filter
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}
setInputFilter(document.getElementById("userTextBox"), function(value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 11);
});

// Answer key
function findStandardKey() {
  if (userInput.toString() === "0,1,3,5,7,8,10") {
    theMajor = "C major";
    theMinor = "A minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,2,3,5,7,8,10") {
    theMajor = "G major";
    theMinor = "E minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,2,3,5,7,9,10") {
    theMajor = "D major";
    theMinor = "B minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,2,4,5,7,9,10") {
    theMajor = "A major";
    theMinor = "F# minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,2,4,5,7,9,11") {
    theMajor = "E major";
    theMinor = "C# minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,2,4,6,7,9,11") {
    theMajor = "B major";
    theMinor = "G# minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "0,1,3,5,6,8,10") {
    theMajor = "F major";
    theMinor = "D minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "1,3,5,6,8,10,11") {
    theMajor = "Bb major";
    theMinor = "G minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "1,3,4,6,8,10,11") {
    theMajor = "Eb major";
    theMinor = "C minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "1,3,4,6,8,9,11") {
    theMajor = "Ab major";
    theMinor = "F minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "1,2,4,6,8,9,11") {
    theMajor = "Db major";
    theMinor = "Bb minor";
    theScale = theMajor + " or " + theMinor;
  } else if (userInput.toString() === "1,2,4,6,7,9,11") {
    theMajor = "Gb major";
    theMinor = "Eb minor";
    theScale = theMajor + " or " + theMinor;
  } else {
    theScale = "Enter a scale!";
  }

  return (theScale);
}

// On [enter] press
function giveGuitar(ele) {
  if (event.keyCode == 13) {
    guitarReceiver();
    document.getElementById("userTextBox").value = "";
  }
}

// On [enter] press for piano
function givePiano(ele) {
  if (event.keyCode == 13) {
    pianoReceiver();
    document.getElementById("userTextBoxPiano").value = "";
  }
}

// FOR PIANO
// Gets input from text box depending on ranges
// Pushes answer info to page and array
function pianoReceiver() {
  x = document.getElementById("userTextBoxPiano").value;
  if (userInput.length === 0) {
    np1 = x;
    if (x < 1 || x > 2) {
      swal("Please enter valid first note!");
    } else if (document.getElementById("userTextBoxPiano").value === "") {
      swal("Enter a note!");
    } else {
      np1 = parseInt(np1);
      userInput.push(np1);
      if (np1 === 1) {
        document.getElementById("k1").className = "hiddenPiano";
      } else if (np1 === 2) {
        document.getElementById("k2").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 1) {
    np2 = x;
    if (x < 2 || x > 4 || (np2 - np1) > 2) {
      swal("Please enter valid second note!");
    } else if (document.getElementById("k2").className === "hiddenPiano" && np2 === "2") {
      swal("Please enter valid second note!");
    } else {
      np2 = parseInt(np2);
      userInput.push(np2);
      if (np2 === 2) {
        document.getElementById("k2").className = "hiddenPiano";
      } else if (np2 === 3) {
        document.getElementById("k3").className = "hiddenPiano";
      } else if (np2 === 4) {
        document.getElementById("k4").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 2) {
    np3 = x;
    if (np3 > 6 || np3 < 4 || (np3 - np2) > 2 || (np3 - np2 < 1)) {
      swal("Please enter valid third note!");
    } else if ((np3 - np2) === 1 && (np2 - np1) === 1) {
      swal("Please enter valid third note!");
    } else {
      np3 = parseInt(np3);
      userInput.push(np3);
      if (np3 === 4) {
        document.getElementById("k4").className = "hiddenPiano";
      } else if (np3 === 5) {
        document.getElementById("k5").className = "hiddenPiano";
      } else if (np3 === 6) {
        document.getElementById("k6").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 3) {
    np4 = x;
    if (np4 > 7 || np4 < 6 || (np4 - np3) > 2 || (np4 - np3) < 1) {
      swal("Please enter valid fourth note!");
    } else if ((np4 - np3) === 1 && (np3 - np2) === 1) {
      swal("Please enter valid fourth note!");
    } else {
      np4 = parseInt(np4);
      userInput.push(np4);
      if (np4 === 6) {
        document.getElementById("k6").className = "hiddenPiano";
      } else if (np4 === 7) {
        document.getElementById("k7").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 4) {
    np5 = x;
    if (np5 > 9 || np5 < 7 || (np5 - np4) > 2 || (np5 - np4) < 1) {
      swal("Please enter valid fifth note!");
    } else if ((np5 - np4) === 1 && (np4 - np3) === 1) {
      swal("Please enter valid fifth note!");
    } else if ((np5 - np4) === 2 && (np4 - np3) === 2 && (np3 - np2) === 2 && (np2 - np1) === 2) {
      swal("Please enter valid fifth note!");
    } else {
      np5 = parseInt(np5);
      userInput.push(np5);
      if (np5 === 7) {
        document.getElementById("k7").className = "hiddenPiano";
      } else if (np5 === 8) {
        document.getElementById("k8").className = "hiddenPiano";
      } else if (np3 === 9) {
        document.getElementById("k9").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 5) {
    np6 = x;
    if (np6 > 11 || np6 < 9 || (np6 - np5 < 1) || (np6 - np5) > 2) {
      swal("Please enter valid sixth note!");
    } else if ((np6 - np5) === 1 && (np5 - np4) === 1) {
      swal("Please enter valid sixth note!");
    } else if ((np6 - np5) === 2 && (np5 - np4) === 2 && (np4 - np3) === 2 && (np3 - np2) === 2) {
      swal("Please enter valid sixth note!");
    } else {
      np6 = parseInt(np6);
      userInput.push(np6);
      if (np6 === 9) {
        document.getElementById("k9").className = "hiddenPiano";
      } else if (np6 === 10) {
        document.getElementById("k10").className = "hiddenPiano";
      } else if (np6 === 11) {
        document.getElementById("k11").className = "hiddenPiano";
      }
    }
  } else if (userInput.length === 6) {
    np7 = x;
    if (np7 > 12 || np7 < 11 || (np7 - np6 < 1) || (np7 - np6 > 2)) {
      swal("Please enter valid last note!");
    } else if ((np7 - np6) === 1 && (np6 - np5) === 1) {
      swal("Please enter valid last note!");
    } else if ((np7 - np6) === 2 && (np6 - np5) === 2 && (np5 - np4) === 2 && (np4 - np3) === 2) {
      swal("Please enter valid last note!");
    } else {
      np7 = parseInt(np7);
      userInput.push(np7);
      if (np7 === 11) {
        document.getElementById("k11").className = "hiddenPiano";
      } else if (np7 === 12) {
        document.getElementById("k12").className = "hiddenPiano";
      }
      showPianoKey();
      if (typeof theMajor === "undefined") {
        swal("Uh oh!  This scale isn't in a major key.");
        userInput = [];
        document.getElementById("majorBotP").innerHTML = "";
        document.getElementById("minorBotP").innerHTML = "";
        var hiddenLen = document.querySelectorAll(".hiddenPiano");
        var hiddenArr = [];
        for (var i = 0; i < hiddenLen.length; i++) {
          hiddenArr.push(hiddenLen[i]);
        }
        for (var i = 0; i < hiddenArr.length; i++) {
          hiddenArr[i].className = "showPiano";
        }
      }
    }
  } else if (userInput.length > 6) {
    userInput = [];
    var hiddenLen = document.querySelectorAll(".hiddenPiano");
    var hiddenArr = [];
    for (var i = 0; i < hiddenLen.length; i++) {
      hiddenArr.push(hiddenLen[i]);
    }
    for (var i = 0; i < hiddenArr.length; i++) {
      hiddenArr[i].className = "showPiano";
    }
    if (x < 1 || x > 2) {
      swal("Please enter valid first note!");
    } else {
      np1 = x;
      np1 = parseInt(np1);
      userInput.push(np1);
      if (np1 === 1) {
        document.getElementById("k1").className = "hiddenPiano";
      } else if (np1 === 2) {
        document.getElementById("k2").className = "hiddenPiano";
      }
    }
  }
}

// Navigation functions
function tabView() {
  document.getElementById("tabViewDiv").className = "show";
  document.getElementById("howToDiv").className = "hidden";
  document.getElementById("faqDiv").className = "hidden";
  document.getElementById("pianoViewDiv").className = "hidden";
  document.getElementById("neckView").className = "hidden";
  document.getElementById("neckViewButton").style.opacity = 0.5;
  document.getElementById("tabViewButton").style.opacity = 1;
  userInput = [];
  document.getElementById("s1").innerHTML = "-";
  document.getElementById("s2").innerHTML = "-";
  document.getElementById("s3").innerHTML = "-";
  document.getElementById("s4").innerHTML = "-";
  document.getElementById("s5").innerHTML = "-";
  document.getElementById("s6").innerHTML = "-";
  document.getElementById("s7").innerHTML = "-";
  document.getElementById("s8").innerHTML = "-";
  var hiddenLen = document.querySelectorAll(".hiddenPiano");
  var hiddenArr = [];
  for (var i = 0; i < hiddenLen.length; i++) {
    hiddenArr.push(hiddenLen[i]);
  }
  for (var i = 0; i < hiddenArr.length; i++) {
    hiddenArr[i].className = "showPiano";
  }
}

function howToView() {
  document.getElementById("tabViewDiv").className = "hidden";
  document.getElementById("howToDiv").className = "show";
  document.getElementById("faqDiv").className = "hidden";
  document.getElementById("pianoViewDiv").className = "hidden";
  document.getElementById("neckView").className = "hidden";
  document.getElementById("neckViewButton").style.opacity = 0.5;
  document.getElementById("tabViewButton").style.opacity = 0.5;
  userInput = [];
  document.getElementById("s1").innerHTML = "-";
  document.getElementById("s2").innerHTML = "-";
  document.getElementById("s3").innerHTML = "-";
  document.getElementById("s4").innerHTML = "-";
  document.getElementById("s5").innerHTML = "-";
  document.getElementById("s6").innerHTML = "-";
  document.getElementById("s7").innerHTML = "-";
  document.getElementById("s8").innerHTML = "-";
  var hiddenLen = document.querySelectorAll(".hiddenPiano");
  var hiddenArr = [];
  for (var i = 0; i < hiddenLen.length; i++) {
    hiddenArr.push(hiddenLen[i]);
  }
  for (var i = 0; i < hiddenArr.length; i++) {
    hiddenArr[i].className = "showPiano";
  }
}

function faqView() {
  document.getElementById("tabViewDiv").className = "hidden";
  document.getElementById("howToDiv").className = "hidden";
  document.getElementById("faqDiv").className = "show";
  document.getElementById("pianoViewDiv").className = "hidden";
  document.getElementById("neckView").className = "hidden";
  document.getElementById("neckViewButton").style.opacity = 0.5;
  document.getElementById("tabViewButton").style.opacity = 0.5;
  userInput = [];
  document.getElementById("s1").innerHTML = "-";
  document.getElementById("s2").innerHTML = "-";
  document.getElementById("s3").innerHTML = "-";
  document.getElementById("s4").innerHTML = "-";
  document.getElementById("s5").innerHTML = "-";
  document.getElementById("s6").innerHTML = "-";
  document.getElementById("s7").innerHTML = "-";
  document.getElementById("s8").innerHTML = "-";
  var hiddenLen = document.querySelectorAll(".hiddenPiano");
  var hiddenArr = [];
  for (var i = 0; i < hiddenLen.length; i++) {
    hiddenArr.push(hiddenLen[i]);
  }
  for (var i = 0; i < hiddenArr.length; i++) {
    hiddenArr[i].className = "showPiano";
  }
}

function pianoView() {
  document.getElementById("tabViewDiv").className = "hidden";
  document.getElementById("howToDiv").className = "hidden";
  document.getElementById("faqDiv").className = "hidden";
  document.getElementById("pianoViewDiv").className = "show";
  document.getElementById("neckView").className = "hidden";
  document.getElementById("neckViewButton").style.opacity = 0.5;
  document.getElementById("tabViewButton").style.opacity = 0.5;
  userInput = [];
  document.getElementById("s1").innerHTML = "-";
  document.getElementById("s2").innerHTML = "-";
  document.getElementById("s3").innerHTML = "-";
  document.getElementById("s4").innerHTML = "-";
  document.getElementById("s5").innerHTML = "-";
  document.getElementById("s6").innerHTML = "-";
  document.getElementById("s7").innerHTML = "-";
  document.getElementById("s8").innerHTML = "-";
  var hiddenLen = document.querySelectorAll(".hiddenPiano");
  var hiddenArr = [];
  for (var i = 0; i < hiddenLen.length; i++) {
    hiddenArr.push(hiddenLen[i]);
  }
  for (var i = 0; i < hiddenArr.length; i++) {
    hiddenArr[i].className = "showPiano";
  }
}

function neckView() {
  document.getElementById("tabViewDiv").className = "hidden";
  document.getElementById("howToDiv").className = "hidden";
  document.getElementById("faqDiv").className = "hidden";
  document.getElementById("pianoViewDiv").className = "hidden";
  document.getElementById("neckView").className = "show";
  document.getElementById("tabViewButton").style.opacity = 0.5;
  document.getElementById("neckViewButton").style.opacity = 1;
  userInput = [];
  document.getElementById("s1").innerHTML = "-";
  document.getElementById("s2").innerHTML = "-";
  document.getElementById("s3").innerHTML = "-";
  document.getElementById("s4").innerHTML = "-";
  document.getElementById("s5").innerHTML = "-";
  document.getElementById("s6").innerHTML = "-";
  document.getElementById("s7").innerHTML = "-";
  document.getElementById("s8").innerHTML = "-";
  var hiddenLen = document.querySelectorAll(".hiddenPiano");
  var hiddenArr = [];
  for (var i = 0; i < hiddenLen.length; i++) {
    hiddenArr.push(hiddenLen[i]);
  }
  for (var i = 0; i < hiddenArr.length; i++) {
    hiddenArr[i].className = "showPiano";
  }
}




/*


Neck view funtionality starts here!


*/

// On [enter] press for piano
function giveNeck(ele) {
  if (event.keyCode == 13) {
    guitarReceiverNeck();
    document.getElementById("userTextBoxNeck").value = "";
  }
}

function guitarReceiverNeck() {
  x = document.getElementById("userTextBoxNeck").value;
  if (userInput.length === 0) {
    n1 = x;
    if (x < 0 || x > 1) {
      swal("Please enter valid first note!");
    } else if (document.getElementById("listN").value === "") {
      swal("Select a tuning!");
    } else if (document.getElementById("userTextBoxNeck").value === "") {
      swal("Enter a note!");
    } else {
      if (tuning === "E") {
        nShift1 = n1;
        nShift1 -= 0;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + n1 + '.png">';
      } else if (tuning === "D#") {
        nShift1 = n1;
        nShift1 -= 1;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "D") {
        nShift1 = n1;
        nShift1 -= 2;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "C#") {
        nShift1 = n1;
        nShift1 -= 3;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "C") {
        nShift1 = n1;
        nShift1 -= 4;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      }
      n1 = parseInt(n1);
      userInput.push(n1);
    }
  } else if (userInput.length === 1) {
    n2 = x;
    if (x < 1 || x > 3 || (n2 - n1) > 2 || (n2 - n1) < 1) {
      swal("Please enter valid second note!");
    } else {
      if (tuning === "E") {
        nShift2 = n2;
        nShift2 -= 0;
        document.getElementById("gn" + n2).innerHTML = '<img src="notes/gn' + n2 + '.png">';
      } else if (tuning === "D#") {
        nShift2 = n2;
        nShift2 -= 1;
        document.getElementById("gn" + n2).innerHTML = '<img src="notes/gn' + nShift2 + '.png">';
      } else if (tuning === "D") {
        nShift2 = n2;
        nShift2 -= 2;
        document.getElementById("gn" + n2).innerHTML = '<img src="notes/gn' + nShift2 + '.png">';
      } else if (tuning === "C#") {
        nShift2 = n2;
        nShift2 -= 3;
        document.getElementById("gn" + n2).innerHTML = '<img src="notes/gn' + nShift2 + '.png">';
      } else if (tuning === "C") {
        nShift2 = n2;
        nShift2 -= 4;
        document.getElementById("gn" + n2).innerHTML = '<img src="notes/gn' + nShift2 + '.png">';
      }
      n2 = parseInt(n2);
      userInput.push(n2);
    }
  } else if (userInput.length === 2) {
    n3 = x;
    if (n3 > 6 || n3 < 3 || (n3 - n2) > 2 || (n3 - n2 < 1)) {
      swal("Please enter valid third note!");
    } else if ((n3 - n2) === 1 && (n2 - n1) === 1) {
      swal("Please enter valid third note!");
    } else {
      if (tuning === "E") {
        nShift3 = n3;
        nShift3 -= 0;
        document.getElementById("gn" + n3).innerHTML = '<img src="notes/gn' + n3 + '.png">';
      } else if (tuning === "D#") {
        nShift3 = n3;
        nShift3 -= 1;
        document.getElementById("gn" + n3).innerHTML = '<img src="notes/gn' + nShift3 + '.png">';
      } else if (tuning === "D") {
        nShift3 = n3;
        nShift3 -= 2;
        document.getElementById("gn" + n3).innerHTML = '<img src="notes/gn' + nShift3 + '.png">';
      } else if (tuning === "C#") {
        nShift3 = n3;
        nShift3 -= 3;
        document.getElementById("gn" + n3).innerHTML = '<img src="notes/gn' + nShift3 + '.png">';
      } else if (tuning === "C") {
        nShift3 = n3;
        nShift3 -= 4;
        document.getElementById("gn" + n3).innerHTML = '<img src="notes/gn' + nShift3 + '.png">';
      }
      n3 = parseInt(n3);
      userInput.push(n3);
    }
  } else if (userInput.length === 3) {
    n4 = x;
    if (n4 > 7 || n4 < 5 || (n4 - n3) > 2 || (n4 - n3) < 1) {
      swal("Please enter valid fourth note!");
    } else if ((n4 - n3) === 1 && (n3 - n2) === 1) {
      swal("Please enter valid fourth note!");
    } else {
      if (tuning === "E") {
        nShift4 = n4;
        nShift4 -= 0;
        document.getElementById("gn" + n4).innerHTML = '<img src="notes/gn' + n4 + '.png">';
      } else if (tuning === "D#") {
        nShift4 = n4;
        nShift4 -= 1;
        document.getElementById("gn" + n4).innerHTML = '<img src="notes/gn' + nShift4 + '.png">';
      } else if (tuning === "D") {
        nShift4 = n4;
        nShift4 -= 2;
        document.getElementById("gn" + n4).innerHTML = '<img src="notes/gn' + nShift4 + '.png">';
      } else if (tuning === "C#") {
        nShift4 = n4;
        nShift4 -= 3;
        document.getElementById("gn" + n4).innerHTML = '<img src="notes/gn' + nShift4 + '.png">';
      } else if (tuning === "C") {
        nShift4 = n4;
        nShift4 -= 4;
        document.getElementById("gn" + n4).innerHTML = '<img src="notes/gn' + nShift4 + '.png">';
      }
      n4 = parseInt(n4);
      userInput.push(n4);
    }
  } else if (userInput.length === 4) {
    n5 = x;
    if (n5 > 8 || n5 < 6 || (n5 - n4) > 2 || (n5 - n4) < 1) {
      swal("Please enter valid fifth note!");
    } else if ((n5 - n4) === 1 && (n4 - n3) === 1) {
      swal("Please enter valid fifth note!");
    } else if ((n5 - n4) === 2 && (n4 - n3) === 2 && (n3 - n2) === 2 && (n2 - n1) === 2) {
      swal("Please enter valid fifth note!");
    } else {
      if (tuning === "E") {
        nShift5 = n5;
        nShift5 -= 0;
        document.getElementById("gn" + n5).innerHTML = '<img src="notes/gn' + n5 + '.png">';
      } else if (tuning === "D#") {
        nShift5 = n5;
        nShift5 -= 1;
        document.getElementById("gn" + n5).innerHTML = '<img src="notes/gn' + nShift5 + '.png">';
      } else if (tuning === "D") {
        nShift5 = n5;
        nShift5 -= 2;
        document.getElementById("gn" + n5).innerHTML = '<img src="notes/gn' + nShift5 + '.png">';
      } else if (tuning === "C#") {
        nShift5 = n5;
        nShift5 -= 3;
        document.getElementById("gn" + n5).innerHTML = '<img src="notes/gn' + nShift5 + '.png">';
      } else if (tuning === "C") {
        nShift5 = n5;
        nShift5 -= 4;
        document.getElementById("gn" + n5).innerHTML = '<img src="notes/gn' + nShift5 + '.png">';
      }
      n5 = parseInt(n5);
      userInput.push(n5);
    }
  } else if (userInput.length === 5) {
    n6 = x;
    if (n6 > 10 || n6 < 8 || (n6 - n5 < 1) || (n6 - n5) > 2) {
      swal("Please enter valid sixth note!");
    } else if ((n6 - n5) === 1 && (n5 - n4) === 1) {
      swal("Please enter valid sixth note!");
    } else if ((n6 - n5) === 2 && (n5 - n4) === 2 && (n4 - n3) === 2 && (n3 - n2) === 2) {
      swal("Please enter valid fifth note!");
    } else {
      if (tuning === "E") {
        nShift6 = n6;
        nShift6 -= 0;
        document.getElementById("gn" + n6).innerHTML = '<img src="notes/gn' + n6 + '.png">';
      } else if (tuning === "D#") {
        nShift6 = n6;
        nShift6 -= 1;
        document.getElementById("gn" + n6).innerHTML = '<img src="notes/gn' + nShift6 + '.png">';
      } else if (tuning === "D") {
        nShift6 = n6;
        nShift6 -= 2;
        document.getElementById("gn" + n6).innerHTML = '<img src="notes/gn' + nShift6 + '.png">';
      } else if (tuning === "C#") {
        nShift6 = n6;
        nShift6 -= 3;
        document.getElementById("gn" + n6).innerHTML = '<img src="notes/gn' + nShift6 + '.png">';
      } else if (tuning === "C") {
        nShift6 = n6;
        nShift6 -= 4;
        document.getElementById("gn" + n6).innerHTML = '<img src="notes/gn' + nShift6 + '.png">';
      }
      n6 = parseInt(n6);
      userInput.push(n6);
    }
  } else if (userInput.length === 6) {
    n7 = x;
    if (n7 > 11 || n7 < 10 || (n7 - n6 < 1) || (n7 - n6 > 2)) {
      swal("Please enter valid last note!");
    } else if ((n7 - n6) === 1 && (n6 - n5) === 1) {
      swal("Please enter valid last note!");
    } else if ((n7 - n6) === 2 && (n6 - n5) === 2 && (n5 - n4) === 2 && (n4 - n3) === 2) {
      swal("Please enter valid last note!");
    } else {
      if (tuning === "E") {
        nShift7 = n7;
        nShift7 -= 0;
        document.getElementById("gn" + n7).innerHTML = '<img src="notes/gn' + n7 + '.png">';
      } else if (tuning === "D#") {
        nShift7 = n7;
        nShift7 -= 1;
        document.getElementById("gn" + n7).innerHTML = '<img src="notes/gn' + nShift7 + '.png">';
      } else if (tuning === "D") {
        nShift7 = n7;
        nShift7 -= 2;
        document.getElementById("gn" + n7).innerHTML = '<img src="notes/gn' + nShift7 + '.png">';
      } else if (tuning === "C#") {
        nShift7 = n7;
        nShift7 -= 3;
        document.getElementById("gn" + n7).innerHTML = '<img src="notes/gn' + nShift7 + '.png">';
      } else if (tuning === "C") {
        nShift7 = n7;
        nShift7 -= 4;
        document.getElementById("gn" + n7).innerHTML = '<img src="notes/gn' + nShift7 + '.png">';
      }
      n7 = parseInt(n7);
      userInput.push(n7);
      showKeyN();

      //  Populate neck with notes



    }
  } else if (userInput.length > 6) {
    userInput = [];
    n1 = x;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
    }
    if (x < 0 || x > 1) {
      swal("Please enter valid first note!");
    } else {
      if (tuning === "E") {
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + n1 + '.png">';
      } else if (tuning === "D#") {
        nShift1 = n1;
        nShift1 -= 1;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "D") {
        nShift1 = n1;
        nShift1 -= 2;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "C#") {
        nShift1 = n1;
        nShift1 -= 3;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      } else if (tuning === "C") {
        nShift1 = n1;
        nShift1 -= 4;
        document.getElementById("gn" + n1).innerHTML = '<img src="notes/gn' + nShift1 + '.png">';
      }

      n1 = parseInt(n1);
      userInput.push(n1);
    }
  }
}


function keyChangeN() {
  if (document.getElementById("listN").value === "E") {
    document.getElementById("tuningNeck").innerHTML = "<b>Standard</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "0px";
  } else if (document.getElementById("listN").value === "D#") {
    document.getElementById("tuningNeck").innerHTML = "<b>Half-step down</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "0px";
  } else if (document.getElementById("listN").value === "D") {
    document.getElementById("tuningNeck").innerHTML = "<b>Whole-step down</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "0px";
  } else if (document.getElementById("listN").value === "dropD") {
    document.getElementById("tuningNeck").innerHTML = "<b>Drop D</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "0px";
  } else if (document.getElementById("listN").value === "C#") {
    document.getElementById("tuningNeck").innerHTML = "<b>Drop C#</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "-0px";
  } else if (document.getElementById("listN").value === "C") {
    document.getElementById("tuningNeck").innerHTML = "<b>Drop C</b>";
    tuning = document.getElementById("listN").value;
    for (var i = 0; i < neckNotes.length; i++) {
      document.getElementById("gn" + i).innerHTML = '<img src="neckspacers/gn' + i + '.png">';
      userInput = [];
    }
    moveLeft.style.left = "0px";
  }
}

function showKeyN() {
  if (tuning === "E") {
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    } else {
      document.getElementById("majorBotN").innerHTML = theMajor;
      document.getElementById("minorBotN").innerHTML = theMinor;
    }
  } else if (tuning === "D#") {
    halfToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    } else {
      document.getElementById("majorBotN").innerHTML = theMajor;
      document.getElementById("minorBotN").innerHTML = theMinor;
    }
  } else if (tuning === "D") {
    dToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");

    }
    document.getElementById("majorBotN").innerHTML = theMajor;
    document.getElementById("minorBotN").innerHTML = theMinor;
  } else if (tuning === "dropD") {
    dToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");

    }
    document.getElementById("majorBotN").innerHTML = theMajor;
    document.getElementById("minorBotN").innerHTML = theMinor;
  } else if (tuning === "C#") {
    cSharpToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    }
    document.getElementById("majorBotN").innerHTML = theMajor;
    document.getElementById("minorBotN").innerHTML = theMinor;
  } else if (tuning === "C") {
    cToStandard();
    findStandardKey();
    if (theScale === "Enter a scale!") {
      swal("Please shift scale down.");
    }
    document.getElementById("majorBotN").innerHTML = theMajor;
    document.getElementById("minorBotN").innerHTML = theMinor;
  } else if (tuning === "") {
    userInput = [];
  }
}