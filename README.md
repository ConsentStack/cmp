<p align="center">
  <img src ="https://consentstack.org/docs/logo.png" alt="Consent Stack - Consent Management GDPR"/>
</p>

# ConsentStack CMP
**Open source, developer focused & human centric consent management platform.**

**NOTE:** This repository is a public version of the product available [here](https://consentstack.org/), and previously developed by [OrbisLabs](https://github.com/orbislabs). The code is being prepared for its debut into the open source world, however we welcome any votes of interest, please submit a comment or even just a :+1: on this [issue](https://github.com/ConsentStack/cmp/issues/1).

## Motivation

Whilst exploring the Consent Management Platforms (CMPs) which are available both open and closed source, it was a striking fact that the goal was to drive the highest possible consent / opt-in rates. An [article published by Digiday](https://digiday.com/media/tech-publisher-future-getting-95-percent-audience-consent-ad-tracking/), explained how the publishing group [Future](https://www.futureplc.com/), achieved a 95% opt-in rate through the optimisation and usage of [dark patterns](https://darkpatterns.org/) in their consent modal. 

There was no thought given to the soft squidgy animals at the other end of the screen. Therefore this projects main aims are:
* Educate people on data harvesting on the web.
* Provide fine grained controls, over that data.
* Create a dialog between the user and the website owner.
* Achieve this through a pleasent user experience.

To help drive the main goals, we have decided to target the developer community to drive adoption of such tooling and use the community to help understand how best to address the web privacy issue.

## Alternative Options (Open Source)

Below are a list of some open source variants of the CMP, which exist today - most likely this list will be expanded with further information and moved into its own repository.

* [IAB Tech Lab Reference Implementation](https://github.com/appnexus/cmp)
* [Axel Springer - OIL.js](https://github.com/as-ideas/oil)
* [Segment.io - Consent Manager](https://github.com/segmentio/consent-manager)

## Installation Instructions

Clone and install the application:
```bash
$ git clone https://github.com/ConsentStack/cmp.git
$ cd cmp
$ npm install
```

Build the application files:
```bash
$ npm run build:prod
```

Start the server, we recommend using a process manager such as [PM2](http://pm2.keymetrics.io/):
```bash
$ pm2 start server/server.js
```

Including the script tag on your website:
```javascript
<html>
  <head>
    <script src="//[YOUR_WEB_SERVER]/cmp" id="pluto-cmp-js-src" client-id="[CLIENT_ID]" async></script>
  </head>
</html>
```

## Usage Documentation

To get a feel for the application, you can find the usage documentation located [here](https://consentstack.org/docs).

## Technical Documentation

Coming soon...

## Roadmap

The below outlines from a very high level the aspirations of this project to make it a solution which will fit any website. Initially this project began as a closed source and cloud hosted solution, I am hoping to lean on the community for direction in design of a generalised, composable consent stack for developers.

### Separate Logic from UI
### Pluggable consent frameworks
### UI Themes Library
### Decentralised Consent Storage

## Contributions

You are welcome to fork the project and submit pull requests to the master branch. More detailed instructions for developers alongside first issues are coming soon!

## License

The ConsentStack CMP is freely distributable under the terms of the [MIT License](https://github.com/ConsentStack/cmp/blob/master/LICENSE).
