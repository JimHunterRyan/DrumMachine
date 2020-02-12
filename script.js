var screen = document.getElementById("display")
//9 keys added
var q = document.getElementById("Q");
var w = document.getElementById("W");
var e = document.getElementById("E");
var a = document.getElementById("A");
var s = document.getElementById("S");
var d = document.getElementById("D");
var z = document.getElementById("Z");
var x = document.getElementById("X");
var c = document.getElementById("C");



document.addEventListener('keypress', logKey);




function playQ() {
  q.play();
  screen.innerHTML="Tick"
}
function playW() {
    w.play();
    screen.innerHTML="Tom"
  }
  function playE() {
    e.play();
    screen.innerHTML="Odd kick"
  }function playA() {
    a.play();
    screen.innerHTML="Slayer"
  }function playS() {
    s.play();
    screen.innerHTML="Hihat"
  }function playD() {
    d.play();
    screen.innerHTML="Synth"
  }function playZ() {
    z.play();
    screen.innerHTML="Double pipe"
  }function playX() {
    x.play();
    screen.innerHTML="Splash"
  }function playC() {
    c.play();
    screen.innerHTML="Metal"
  }
function logKey(q) {
    playQ()
  }
  

  

