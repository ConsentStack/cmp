const clientConfig = {
  clientId: 3,
  clientName: 'Habito',
  clientLogo: __webpack_public_path__ + '/assets/logo-habito.svg',
  clientStyle: true,
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customVendors: [],
  },
  views: {
    homeView: {
      title: 'We value your privacy.',
      body: `You have control over your personal data. 
            We use technology to create a personalised experience for our users, for analytics and for advertising. 
            Please click <b>"I agree"</b> to provide consent to us and third parties mentioned in our <a href="https://www.habito.com/privacy">Privacy & Cookie Policy</a> to process your data for these purposes. 
            You can change your settings at any time.`,
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
