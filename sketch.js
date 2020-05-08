var form;
var START = 0;
var PLAY = 1;
var SHOWGREETING = 2;
var gameState = START;
var database;
var peopleCount = 1;
var users = [];

function setup() {
  createCanvas(1200,700);
  form = new Form();

  database = firebase.database();
  form.updateState();

}

function draw() {
  background(255);

  // console.log(mouseX,mouseY);
  form.display();
  form.style();
  form.hide();
  form.StartSurvey();
  form.updateCount();
  form.loadGreeting();
  form.showGreeting();
  if(peopleCount > 0){
    form.updateEmail()
  }
  form.assignCount();
}
