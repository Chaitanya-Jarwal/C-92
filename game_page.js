var preloader = document.getElementById("loading");
var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML= player1_name+" : ";
document.getElementById("player2_name").innerHTML= player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn -"+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn -"+ player2_name;
function remove () {
 preloader.style.display = 'none';
}

function send (){
    var getWord =document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);
    var C1 = word.charAt(1);
    console.log(C1);
    var Mid= Math.floor(word.length/2);
    var Cmid = word.charAt(Mid);
    console.log(Cmid);
    var End = word.length-1;
    var Cend = word.charAt(End);
    var remove_C1=word.replace(C1,"_");
    var remove_Cmid=remove_C1.replace(Cmid,"_");
    var remove_Cend=remove_Cmid.replace(Cend,"_");
    console.log(remove_Cend);
    var question_word="<h4 id='word_display'>Q."+remove_Cend+"</h4>";
    var input_box="<br>answer: <input type='text' id='input_check_box'> ";
    var check_button="<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    var row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""; 
}

var Question_Turn="player_1";
var Answer_Turn="player_2";
function check(){
getAnswer = document.getElementById("input_check_box").value;
answer = getAnswer.toLowerCase();
console.log(answer);
if (answer==word) {
 if (Answer_Turn=="player_1") {
  player1_score = player1_score+1;
  document.getElementById("player1_score").innerHTML=player1_score;
 }
 else
 {
     player2_score= player2_score+1;
     document.getElementById("player2_score").innerHTML=player2_score;
  }
 }
 if (Question_Turn=="player_1"){
  Question_Turn="player_2";
  document.getElementById("player_question").innerHTML="Question Turn -" + player2_name; 
 }
 else
 {
     Question_Turn="player_1";
     document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
 }
 if (Answer_Turn=="player_1") {
     Answer_Turn="player_2";
     document.getElementById("player_answer").innerHTML= "Answer Turn -" + player2_name;
 }
 else {
     Answer_Turn="player_1";
     document.getElementById("player_answer").innerHTML= "Answer Turn -" + player1_name;
 }
 document.getElementById("output").innerHTML="";
}