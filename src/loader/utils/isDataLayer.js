// renameBug..
export default function isDataLayer() {
  return new Promise((resolve, reject) => {
    const result = (typeof dataLayer !== 'undefined') ? true : false;
    resolve(result);
  });
}
