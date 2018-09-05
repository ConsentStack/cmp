import initLoader from './loader';
import initCmp from './cmp';
import initApi from './api';
import isShowUi from './cmp/isShowUi';
import tagManagerModule from './cmp/tagManager';

async function init() {
  const loaderData = await initLoader();
  const cmp = await initCmp(loaderData);
  window.cmp = cmp; // TODO: remove this it should not be set globally
  initApi(cmp)
    .then(() => isShowUi(loaderData.iabCookie))
    .then((bool) => {
      if (bool) cmp.showConsentTool();
      Promise.resolve(true);
    })
    .then(result => cmp.readyCmpAPI(result))
    .then(() => tagManagerModule())
    .catch(err => console.error(err));
}
init();
