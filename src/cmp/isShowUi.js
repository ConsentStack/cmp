export default function (cookie) {
  const isCookiePresent = (typeof cookie === 'string');
  console.log('[INFO][Module-isShowUi]: ', !isCookiePresent);
  return Promise.resolve(!isCookiePresent);
}
