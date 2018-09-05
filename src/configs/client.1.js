const clientConfig = {
  clientId: 1,
  clientName: 'MiQ',
  clientLogo: __webpack_public_path__ + '/assets/logo-miq.png',
  clientStyle: false,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [32, 101],
    customVendors: [1001, 1002, 1003, 1004],
  },
  views: {
    homeView: {
      title: 'We are MiQ!',
      body: `MiQ and our partners use technology such as cookies on our site for analytics and advertising purposes. 
      By clicking '<b>I Agree</b>' you consent to use of this technology across the web by us and the third-parties mentioned in our <a href="http://wearemiq.com/privacy-policy/">Privacy Policy</a>. 
      You can change your mind and revisit your consent choices at anytime by returning to this site.`,
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
