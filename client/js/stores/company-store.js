var AppDispatcher = require('../dispatcher/AppDispatcher');
var CompanyConstants = require('../constants/company-constants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  companies: JSON.parse(localStorage.getItem('companies')) || []
};

function _setCompanies (companies) {
  _store.companies = companies;
  _saveStoreToLocalStorage();
}

// Saves to localStorage for persistency everytime a write occurs
function _saveStoreToLocalStorage () {
  localStorage.setItem('companies', JSON.stringify(_store.companies));
}

var CompanyStore = objectAssign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getCompanies: function () {
    return _store.companies;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case CompanyConstants.GET_ALL_COMPANIES:
      _setCompanies(action.companies);
      console.log('Got all companies', _store.companies.length);
      break;

    default:
      return true;
  }

  CompanyStore.emitChange();
});

module.exports = CompanyStore;
