const express = require('express');

const router = express.Router();

// TODO: decide on the middleware for logging
router.get('/getCookie', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': req.get('Origin'),
    'Access-Control-Allow-Credentials': 'true',
  });
  res.json({
    euconsent: (req.cookies.euconsent) ? req.cookies.euconsent : false,
    plutoconsent: (req.cookies.plutoconsent) ? req.cookies.plutoconsent : false,
  });
  res.end();
});

router.get('/setCookie', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': req.get('Origin'),
    'Access-Control-Allow-Credentials': 'true',
  });
  res.cookie(req.query.n, req.query.c, { maxAge: 336960000, domain: '.consensu.org' });
  res.end();
});

module.exports = router;
