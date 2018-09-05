# Pluto Pixel Documentation
The **cmp-pixel** application is designed to check if a web user has a global IAB consent cookie set, and dependant on its value fire a corresponsing AppNexus pixel or return back a 43byte transparent GIF with no tracking.

## Basics
- The application is running on an auto-scaling cluster in Google Cloud.
- SSL is setup for this service.
- It is setup behind a NGINX reverse proxy, and routes requests on `https://pluto.mgr.consensu.org/`.

## Endpoints
There are two available endpoints, which the application exposes:
- `/pixel`: this is the production endpoint for usage, which will be described below.
- `/pixel/test`: this endpoint allows for the testing of the internal flow off the application, see below for an example response.

#### Request:
```bash
GET /pixel/test?id=12345&segment=12345
```

#### Response:
```json
{
    "isUserEu": true,
    "isCookiePresent": "BOPO8xhOPPLRCA0ABBENAk-AAAAXyACABAAGUA",
    "isConsentGiven": true,
    "fireGif": false,
    "firePixel": {
        "bool": true,
        "id": "https://secure.adnxs.com/px?id=1234&segment=12344&t=2"
    }
}
```
In the above example, we can see the user made a request from within the EU, has a cookie set, and its value allow for:
- Vendors: 32 & 101 (MiQ & AppNexus)
- Purposes: 1-5
Therefore we fire the pixel shown in the `firePixel.id` key of the object. 

## Application Flow
The application is designed with some request altering middleware:
```
+-----------+         +----------------+         +---------------+
|           |         |                |         |               |
| isUserEu  | ------> |isCookiePresent | ------> |isConsentGiven |
|           |         |                |         |               |
+-----------+         +----------------+         +---------------+
```
Once the request body has been appended with the extra fields we check the following logic:

- Is the user in an EU country & have they given consent - if yes -> fire pixel.
- Is the user not in an EU country - if yes -> fire pixel.
- Any other scenario -> return a GIF.

## Usage

Setup is extremely simple, and follows the same principles as standard pixels.
- Setup by first creating an Appnexus pixel to which you want to redirect on a consent user fire.
- Once that is complete, convert the below template using the values from your Appnexus pixel code.

```html
<img src="https://pluto.mgr.consensu.org/pixel?id=[PIXEL_ID]&segment=[SEGMENT_ID]" width="1" height="1">
```

If you have not created a segment into which you want the users automatically populated, you can simply omit that part of the query string:

```html
<img src="https://pluto.mgr.consensu.org/pixel?id=[PIXEL_ID]" width="1" height="1">
```