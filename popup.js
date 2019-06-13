function openSettingsSlack() {
  document.getElementById('settings-slack').classList.toggle('settings-open');
}

document.getElementById('settings-slack-button').addEventListener('click', openSettingsSlack);


document.getElementById('set-webhook-url').addEventListener('submit',function (e) {
  e.preventDefault();
  getURL();
});

function getURL() {
  webhookUrl = document.getElementById('url-input').value;
  saveWebhookUrl();
}

function saveWebhookUrl() {
  localStorage.setItem('receivedUrl', webhookUrl);
}

var webhookUrl = localStorage.getItem('receivedUrl');

if (webhookUrl == null) {
  webhookUrl = "https://hooks.slack.com/services/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";
}

console.log(localStorage.getItem('receivedUrl'));
console.log(webhookUrl);


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

function sendToSlack(word, mean) {
  $.ajax({
    data: 'payload=' + JSON.stringify({
      "text": `${word} : ${mean}`
    }),
    dataType: 'json',
    processData: false,
    type: 'POST',
    url: webhookUrl,
  });
}
