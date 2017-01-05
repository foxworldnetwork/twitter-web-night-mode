chrome.storage.local.get({'nightmode': true}, function(items) {
  if(items.nightmode) {
    setNightMode();
  }
});

function setNightMode() {
  var regex = /https:\/\/twitter\.com\/(.*)/;

  if (regex.test(document.URL) && document.getElementById('custom-style-twitter-dark-mode') === null) {
    var style = document.createElement('link');
    style.id = 'custom-style-twitter-dark-mode';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/main.css');
    (document.head||document.documentElement).appendChild(style);
  }
}

