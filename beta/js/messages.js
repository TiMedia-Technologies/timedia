if (getQueryVariable("app") == 2) {
  document.getElementById("chat").style = "";
  document.getElementById("joinChatBtn").style = "";
  document.getElementById("random-password-notice").style = "";
  document.getElementById("random-password-btn").style = "";
}

function joinChat() {
  var url = "index.html?app=" + document.getElementById("chat").value;
  localStorage.workToSave = url;
  window.location.href = "index.html?app=7";
}

function randomTiChatPassword() {
  var password = Math.floor(100000000 + Math.random() * 900000000);
  var url = "index.html?app=" + password;
  localStorage.workToSave = url;
  window.location.href = "index.html?app=7";
}

function showChatPassword() {
  localStorage.showChatPassword = true;
  document.getElementById('show-chat-password').style = "display: none;";
  document.getElementById('hide-chat-password').style = "display: block;";
  window.location.reload();
  if (window.location !== "index.html" && document.title == "Home - TiMedia" && getQueryVariable("app") !== false) {
  document.getElementById('chat-password-label').style = "display: block;";
  document.getElementById('chat-password-label').innerHTML = "Chat Password:  " + getQueryVariable("app");
  }
}

function hideChatPassword() {
  localStorage.showChatPassword = false;
  document.getElementById('chat-password-label').style = "display: none;";
  document.getElementById('chat-password-label').innerHTML = "";
  document.getElementById('show-chat-password').style = "display: block;";
  document.getElementById('hide-chat-password').style = "display: none;";
}

if (localStorage.showChatPassword == true) {
  document.getElementById('show-chat-password').style = "display: none;";
  document.getElementById('hide-chat-password').style = "display: block;";
} else {
  document.getElementById('show-chat-password').style = "display: block;";
  document.getElementById('hide-chat-password').style = "display: none;";
}

if (window.location !== "index.html" && document.title == "Home - TiMedia" && getQueryVariable("app") !== false && localStorage.showChatPassword !== false) {
  document.getElementById('chat-password-label').style = "display: block;";
  document.getElementById('chat-password-label').innerHTML = "Chat Password:  " + getQueryVariable("app");
} else {
  document.getElementById('chat-password-label').style = "display: none;";
  document.getElementById('chat-password-label').innerHTML = "";
}
