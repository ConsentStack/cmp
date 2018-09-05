import * as cookies from '../utils/cookies';

export default function getCustomVendorsAllowed() {
  if (typeof cookies.readCookieSync('custom') === 'string') {
    return JSON.parse(cookies.readCookieSync('custom'));
  }
  return [];
}
