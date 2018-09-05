import { ConsentString } from 'consent-string';
import getCustomVendorsAllowed from './customVendors';
import * as cookies from '../utils/cookies';
import iabVendorList from '../configs/iabVendorList';
import tagManagerModule from './tagManager';

export default class Cmp extends ConsentString {
  constructor(result = null) {
    super(result.iabCookie);
    this.setCmpId(52);
    this.setCmpVersion(1);
    this.setConsentLanguage('en');
    this.setConsentScreen(1);
    this.setGlobalVendorList(iabVendorList);
    this.clientId = result.clientId;
    this.cmpLoaded = false;
    this.customVendorsAllowed = getCustomVendorsAllowed();
  }

  readyCmpAPI() {
    this.cmpLoaded = true;
    console.log(`[INFO][Module-CMP]: CMP loaded status is => ${this.cmpLoaded}`);
    Promise.resolve();
  }

  ping(empty = null, callback = () => {}) {
    const result = {
      gdprAppliesGlobally: true,
      cmpLoaded: this.cmpLoaded,
    };
    callback(result, true);
  }

  // TODO: allVendors does not exist right now
  getVendorConsents(vendors = allVendors, callback = () => {}) {
    const result = {};
    vendors.forEach((element) => {
      result[element] = this.isVendorAllowed(element);
    });
    callback(result, true);
  }

  getConsentData(empty = null, callback = () => {}) {
    const result = this.getConsentString();
    callback(result, true);
  }

  showConsentTool() {
    console.log('[INFO][CMP-Module] showConsentTool() has been called.');
    return new Promise((resolve, reject) => {
      return import(
        /* webpackMode: "lazy",
        webpackPrefetch: true,
        webpackChunkName: "ui" */
        '../ui/main')
        .then(appModule => appModule.default(this.clientId))
        .then(userConsentObject => this.updateCmpAndWriteCookie(userConsentObject))
        .then(() => tagManagerModule())
        .then(() => cookies.requestHttpCookies('euconsent', this.getConsentString()))
        .then(result => Promise.resolve(result))
        .catch(err => console.error(err));
    });
  }

  setCustomVendorsAllowed(customVendorArray) {
    this.customVendorsAllowed = customVendorArray;
  }

  updateCmpAndWriteCookie(consentObject) {
    return new Promise((resolve, reject) => {
      this.setPurposesAllowed(consentObject.purposes);
      this.setVendorsAllowed(consentObject.vendors);
      this.setCustomVendorsAllowed(consentObject.customVendors);
      console.log('[INFO][Module-CMP]: Received consent object', consentObject);
      console.log(`CMP => Set CustomVendors:${JSON.stringify(this.customVendorsAllowed)}`);
      console.log(`CMP => Set Purposes: ${JSON.stringify(this.getPurposesAllowed())}`);
      console.log(`CMP => Set Vendors: ${JSON.stringify(this.getVendorsAllowed())}`);
      cookies.writeCookieCustom(JSON.stringify(consentObject.customVendors));
      cookies.writeCookie(this.getConsentString())
        .then((result) => {
          if (result) resolve(true);
        });
    });
  }
}
