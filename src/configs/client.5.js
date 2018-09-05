const clientConfig = {
  clientId: 5,
  clientName: 'Noma',
  clientLogo: __webpack_public_path__ + 'assets/logo-noma.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [101],
    customVendors: [1001, 1003],
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: `We and our partners use cookies on our site for analytics and advertising purposes. 
            By selecting <b>"I agree"</b> you are consenting to use of this technology across the web by us and our ad partners.  
            More information can be found in our <a href="https://www.noma-westminster.com/privacy-policy">privacy policy</a>.
            If you change your mind, you can change your preferences at anytime when returning to this site.`,
    },
    purposeView: {
      purposeType: 'default',
      title: 'Our Purposes',
      body: `We use cookies and work with various partners to create a tailored experience for our users. 
      Below you can find all the purposes for which we collect data from your device.`,
      vendorsText: 'You can also view and remove the partners and vendors with whom we share your information: ',
      purposeText: [{
        id: 1,
        purpose: 'Storage and access of information',
      },
      {
        id: 2,
        purpose: 'Personalisation',
      },
      {
        id: 3,
        purpose: 'Ad selection, delivery, reporting',
      },
      {
        id: 4,
        purpose: 'Measurement',
      },
      {
        id: 5,
        purpose: 'Content selection, delivery, reporting',
      },
      ],
    },
    vendorView: {
      title: 'Our Partners',
      body: `Below is a list of our technology partners, please explore each partners policy and remove any
          which do not conform to your privacy standards.`,
    },
  },
};

export default clientConfig;
