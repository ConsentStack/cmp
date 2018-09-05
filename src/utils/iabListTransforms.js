function fetchAllVendorsArray(vendorList) {
  return vendorList.vendors.map(item => item.id);
}

function fetchAllPurposeArray(vendorList) {
  return vendorList.purposes.map(item => item.id);
}

export {
  fetchAllVendorsArray,
  fetchAllPurposeArray,
};
