// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'ephemeral_keys',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{key}',
  }),
});
