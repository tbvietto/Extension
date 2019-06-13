function saveQuestion() {
  localStorage.setItem('receivedSentence', sentence);
  localStorage.setItem('receivedWord', word);
}

var sentence = localStorage.getItem('receivedSentence');
var word = localStorage.getItem('receivedWord');

function getQuestion() {
  sentence = document.getElementById("sentence-input").value;
  word = document.getElementById("word-input").value;
  saveQuestion();
  showQuestion();
  sendToSlack(sentence, word);
}

document.getElementById("content-form").addEventListener('submit', function(e){
  e.preventDefault();
  getQuestion();
});

function showQuestion() {
  document.getElementById("show-question").innerHTML = `${sentence} ${word}`;
}

const webhookUrl = "https://hooks.slack.com/services/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";
function sendToSlack(word, mean) {
  $.ajax({
    data: 'payload=' + JSON.stringify({
      "text": `${word} : ${mean}`
    }),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: webhookUrl
  });
}
