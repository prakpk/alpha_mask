// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'payments',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{intent}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{intent}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'list',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),

  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),

  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),

  sessionTokens: stripeMethod({
    method: 'POST',
    path: '/session_tokens',
  }),
});
