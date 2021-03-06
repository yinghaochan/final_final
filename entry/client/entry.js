// import Meteor Methods for optimistic updates
// import 'TodoApp/todo-methods';
import 'Other/test';

import ReactDOM from 'react-dom';
import React from 'react';

import './root';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

// uncomment to enable tests
// if (process.env.NODE_ENV !== 'production') {
//   if (process.env.FRAMEWORK === 'jasmine-client-integration') {
//     // Run the integration tests on the mirror
//     const context = require.context('../../modules', true, /\/client\/(.*)\/integration\/(.*)\-test\.jsx?$/);
//     context.keys().forEach(context);
//   } else {
//     // Run unit tests on client
//     const context = require.context('../../modules', true, /\/client\/(.*)\/unit\/(.*)\-test\.jsx?$/);
//     context.keys().forEach(context);
//   }
// }
