// function openSettings() {
//   document.getElementById("settings").classList.toggle("settings-open");
// }
//
// document.getElementById("settings-button").addEventListener('click', openSettings);
// //when the button, which has id is 'settings-button is clicked, then execute openSettings function
//
//
// function saveName() {
//   localStorage.setItem('receivedName', userName);
// }
//
// var userName = localStorage.getItem('receivedName');
//
// if (userName == null) {
//   userName = "Friend";
// }
//
// function changeName() {
//   userName = document.getElementById("name-input").value;
//   saveName();
//   getGreeting()
// }
//
// document.getElementById("name-form").addEventListener('submit',function(e) {
//   e.preventDefault();
//   changeName();
// });
//
// function getGreeting() {
//   document.getElementById("greeting").innerHTML = `Hello, ${userName}. Enjoy your day!`;
// }
//
// getGreeting();
console.log(localStorage.getItem('receivedSentence'));
console.log(document);

function showQuestion() {
  document.getElementById("greeting").innerHTML = `This is question: ${localStorage.getItem('receivedSentence')}!`;
}

showQuestion();
