import Cookie from 'js-cookie';

const map = new Map();
map.set(11, 'isFunctionalAllowed');
map.set(12, 'isAnalyticsAllowed');
map.set(13, 'isMarketingAllowed');

function updateConsentCookies(purposeArray) {
  for (let i = 0; i < purposeArray.length; i++) {
    if (map.get(purposeArray[i])) {
      Cookie.set(map.get(purposeArray[i]), true);
    }
  }
}

export default function tagManagerModule() {
  return new Promise((resolve, reject) => {
    const purposeArray = cmp.getPurposesAllowed();
    if (purposeArray === undefined || purposeArray.length == 0) {
      console.log('[INFO][Module-TMS] => No user consented purposes');
      resolve(false);
    } else if (!window.dataLayer) {
      console.log('[INFO][Module-TMS] => No dataLayer Detected');
      resolve(false);
    } else {
      console.log('[INFO][Module-TMS] => Consented purposes', purposeArray);
      updateConsentCookies(purposeArray);
      window.dataLayer.push({ event: 'updatedConsentSettings' });
      console.log('[INFO][Module-TMS] => Updated dataLayer', window.dataLayer);
      resolve(true);
    }
  });
}
