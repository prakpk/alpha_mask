// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'customers',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{customer}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{customer}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    path: '/{customer}',
  }),

  listPaymentMethods: stripeMethod({
    method: 'GET',
    path: '/{customer}/payment_methods',
    methodType: 'list',
  }),

  getCustomerMandates: stripeMethod({
    method: 'GET',
    path: '/{customer}/mandates',
  }),
});
