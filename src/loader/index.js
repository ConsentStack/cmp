import getClientId from './utils/getClientId';
import isDataLayer from './utils/isDataLayer';
import packageJson from '../../package.json';
import {
  is1PCSupported,
  is3PCSupported,
  get1PCookieValue,
} from './utils/isCookie';

export default function initLoader() {
  return Promise.all([
    getClientId(),
    isDataLayer(),
    is1PCSupported(),
    is3PCSupported(),
    get1PCookieValue('euconsent'), // cookie.get('1P','name');
  ]).then((result) => {
    // return {clientId, isDataLayer, is1PCSupported, is3PCSupported, iabCookie} = ...result
    return {
      appVersion: packageJson.version, // TODO: fetch this fro
      clientId: result[0],
      isDataLayer: result[1],
      is1PCSupported: result[2],
      is3PCSupported: result[3],
      iabCookie: result[4],
    };
  }).catch(err => console.log(err));
}
