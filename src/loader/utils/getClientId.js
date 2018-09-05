export default function getClientID() {
  return new Promise((resolve, reject) => {
    const scriptElement = document.getElementById('pluto-cmp-js-src');
    const clientId = (scriptElement) ? scriptElement.getAttribute('client-id') : 0;
    resolve(parseInt(clientId));
  });
}