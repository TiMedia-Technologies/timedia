function saveDoc() {
  var url = window.location.href + '&p=' + btoa(document.getElementsByTagName('h5')[0].innerHTML);

  document.getElementById("url").innerHTML = 'Document URL: ' + url;
}

if (getQueryVariable("p") !== false || localStorage.edit !== undefined) {
  if (localStorage.edit !== undefined) {
    document.getElementsByClassName('h5').innerHTML = localStorage.edit;
    localStorage.removeItem('edit');
  }
  
  document.getElementById('create').remove();
  document.getElementById('view').style = "visibility: block;";
  document.getElementById('view').innerHTML = atob(getQueryVariable("p"));
  document.getElementById('tidocs-edit').style = "display: block;";
}

function editDoc() {
  localStorage.edit = atob(getQueryVariable("p"));
  location.reload();
}
