# Pluto Cookies API       !!!! DRAFT !!!!
This is a IAB specific module which houses all of the cookies related functions & logic needed for a CMP. This library will cater for 1st/3rd party cookies, including HTTP cookies.

### What is needed.
- check if the browser allows setting of 1st party cookies
- check if the browser allows setting of 3rd party cookies
- check if a CMP cookie is present (1st party)
- check if a CMP cookie is present (3rd party)
- write a 1st party cookie
- read a 1st party cookies
- write/request a 3rd party cookie
- read/receive a 3rd party cookie

### Reference
https://github.com/InteractiveAdvertisingBureau/Consent-String-SDK-JS
https://github.com/js-cookie/js-cookie

### Defaults
```
Max-Age=<number> 
(30 * 24 * 60 * 60) // equals 30 days
```

### Cookie Types & Names
#### IAB Cookies
- `euconsent`
- `pubeuconsent`

#### Pluto Cookies
- `tbd`: custom vendors & purposes
- `tbd`: cookie(s) which aid with GTM integration

## API - All promises "thenable"

```javascript
Cookies.allowed() // returns bool
```

When we set/get we can check against some definitions / dictionary, i.e name should be x, y, or z.

```javascript
Cookies.set('name','value') // 
Cookies.get('name') //

Cookies.setHttp('name','value')
DO NOT IMPLEMENT: Cookies.getHttp() // not sure if we ever need to fetch 3rd party cookies to the UI.

// this is specific to the IAB spec
// they are availble from the linked lib above.
Cookies.decode() // returns JSON object
Cookies.encode() // returns base64 String



const Cookies = new Cookies();
```
