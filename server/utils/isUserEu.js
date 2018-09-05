// TODO: this can be converted to a middleware function,
// which can be called once - to add in req.body

const euCountries = [
  'GB',
  'AT',
  'BE',
  'BG',
  'HR',
  'CY',
  'CZ',
  'DK',
  'EE',
  'FI',
  'FR',
  'DE',
  'GR',
  'HU',
  'IE',
  'IT',
  'LV',
  'LT',
  'LU',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SK',
  'SI',
  'ES',
  'SE',
];

function isUserEu(countryCode) {
  return euCountries.includes(countryCode);
}

module.exports.isUserEu = isUserEu;
