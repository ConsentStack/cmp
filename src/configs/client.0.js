const clientConfig = {
  clientId: 0,
  clientName: 'demo',
  clientLogo: '',
  defaults: {
    purposes: [1, 2, 3, 4, 5],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    customVendors: [],
  },
  views: {
    homeView: {
      title: 'We use cookies...',
      body: `And you should be able to take control over your personal data. Therefore we are providing you with new controls to manage your data, to give you a better internet experience.
              If you click Accept all below you consent to us and all the third-parties mentioned in our Privacy and Cookie Notice setting cookies and processing your personal data for the purposes of analytics and advertising.`,
    },
    purposeView: {
      title: 'Our Purposes',
      body: `We use cookies and work with various partners to create a tailored experience for our users. 
            Below you can find all the purposes for which we collect your device data.`,
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
      body: `Below are a list of our partners, please explore each vendors policy and remove any
                    which do not conform to your privacy standards.`,
    },
  },
};

export default clientConfig;
