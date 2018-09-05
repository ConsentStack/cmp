const clientConfig = {
  clientId: 4,
  clientName: 'Custom Purpose Client',
  clientLogo: 'https://upload.wikimedia.org/wikipedia/fi/a/ab/The_Independent_logo.svg',
  defaults: {
    purposes: [1, 2, 3, 4, 5, 11, 12, 13],
    vendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // customPurposes: [11, 12, 13],
    customVendors: [],
  },
  views: {
    homeView: {
      title: 'Dear Reader,',
      body: `In order to run a successful online newspaper, The Independent and third parties are storing and accessing information on your device with cookies and other technologies. 
              Several third parties are also processing personal data to show you personalised content and ads. 
              This can also be on websites that are not just ours. Under new <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/">EU Regulation</a>, your consent is needed for both setting cookies and processing your personal data.
              You can view our privacy policy <a href="https://www.independent.co.uk/service/privacy-policy-a6184181.html">here</a>.`,
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
