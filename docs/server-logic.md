# Design Doc for Server Logic

The server currently is minimal, mainly serving static bundles.

### Information Needed
- Country of the Request
- Cookie value of the Request
- Client ID of the Request

### Current Headers
- `X-Request-Country` : which is a 2 letter country code, list is available here ...

### Added soon
- `Cookie` : which will contain `custom` & `euconsent` cookies

### Route
- We should move the `clientId` into the request route, this will make it easier to parse on the route for various logic

### Logic
Could look as below:
- check the clientId, as each one will/may have individual logic
- check the geo of the user, as for non-EU users we may just send a `HTTP 444`
- check the cookie value, because if a user had granted all needed consent, again we can avoid showing the UI - we do need to send the app however as it exposes a global client side API for other scripts to query

### TODO:
#### P1
- pass cookie header to server
- move clientId into querystring
- implement local nginx for proper testing

#### P2
- setup DB for client config