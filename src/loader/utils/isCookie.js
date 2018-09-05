function is1PCSupported() {
  return new Promise((resolve, reject) => {
    let cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
      document.cookie = "testcookie";
      cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    if (cookieEnabled == true || false) {
      resolve(cookieEnabled);
    } else {
      reject();
    }
  });
}

// TODO: is3PCSupported() this takes quite a long time to resolve, and blocks loading of CMP + API
function is3PCSupported() {
  return new Promise((resolve, reject) => {
    const frame = document.createElement('iframe');
    frame.setAttribute('src', __webpack_public_path__ + 'cookieCheckStart.html');
    frame.setAttribute('style', 'display:none');
    document.body.appendChild(frame);
    const receiveMessage = function (evt) {
      if (evt.data === 'MM:3PCunsupported') {
        resolve(false);
      } else if (evt.data === 'MM:3PCsupported') {
        resolve(true);
      }
    };
    window.addEventListener('message', receiveMessage, false);
  });
}

function get1PCookieValue(name = 'euconsent') {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return Promise.resolve(parts.pop().split(';').shift());
  }
  return Promise.resolve(false);
}

export {
  is1PCSupported,
  is3PCSupported,
  get1PCookieValue,
};
