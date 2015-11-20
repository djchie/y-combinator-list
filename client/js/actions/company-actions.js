var $ = require('jquery');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CompanyConstants = require('../constants/company-constants');

// Asynchronous calls are done in actions to keep stores synchronous
var CompanyActions = {

  // Action to get all companies
  getAllCompanies: function (parameters) {
    $.ajax({
      url: '/companies',
      dataType: 'json',
      type: 'GET',
      data: parameters,
      success: function (data) {
        console.log('Successfully got data');
        AppDispatcher.handleAction({
          actionType: CompanyConstants.GET_ALL_COMPANIES,
          companies: data
        });
      },
      error: function (request, status, error) {
        console.log('Error with getAllCompanies');
        console.log('Request', request);
        console.log('Status', status);
        console.log('Error', error);
      }
    });
  }

};

module.exports = CompanyActions;
