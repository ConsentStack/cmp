function getCookie(sKey) {
  if (!sKey) {
    return null;
  }
  return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
}

if (typeof window.dataLayer === 'undefined') {
  console.log('[INFO][Module-TMS] dataLayer is undefined.');
} else if (getCookie('isFunctionalAllowed') || getCookie('isAnalyticsAllowed') || getCookie('isMarketingAllowed')) {
  console.log('[INFO][Module-TMS] Consent settings already set.');
} else {
  console.log('[INFO][Module-TMS] Non-EU User, setting full consent.');
  document.cookie = 'isFunctionalAllowed=true';
  document.cookie = 'isAnalyticsAllowed=true';
  document.cookie = 'isMarketingAllowed=true';
  window.dataLayer.push({
    event: 'updatedConsentSettings',
  });
}
