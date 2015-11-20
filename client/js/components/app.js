var React = require('react');
var _ = require('underscore');

var CompanyActions = require('../actions/company-actions');
var CompanyStore = require('../stores/company-store');

var SearchForm = require('./search-form');
var CompanyList = require('./company-list');


var App = React.createClass({
  getInitialState: function () {
    return {
      searchString: '',
      statuses: [],
      classes: [],
      years: [],
      companies: CompanyStore.getCompanies()
    };
  },
  componentDidMount: function () {
    CompanyStore.addChangeListener(this._onChange);
    CompanyActions.getAllCompanies(this.generateStateParameters());
  },
  componentWillUnmount: function () {
    CompanyStore.removeChangeListener(_onChange);
  },
  _onChange: function () {
    this.setState({
      companies: CompanyStore.getCompanies()
    });
  },  
  generateStateParameters: function (newParameter) {
    var parameters = {
      searchString: this.state.searchString,
      statuses: this.state.statuses,
      classes: this.state.classes,
      years: this.state.years
    };

    if (newParameter) {
      return _.extend(parameters, newParameter);
    }

    return parameters;
  },
  searchInputHandler: function (searchString) {
    this.setState({
      searchString: searchString
    });
    CompanyActions.getAllCompanies(this.generateStateParameters({searchString: searchString}));
  },
  statusInputHandler: function (statuses) {
    this.setState({
      statuses: statuses
    });
    CompanyActions.getAllCompanies(this.generateStateParameters({statuses: statuses}));
  },
  classInputHandler: function (classes) {
    this.setState({
      classes: classes
    });
    CompanyActions.getAllCompanies(this.generateStateParameters({classes: classes}));
  },
  yearInputHandler: function (years) {
    this.setState({
      years: years
    });
    CompanyActions.getAllCompanies(this.generateStateParameters({years: years}));
  },
  fundingSliderHandler: function () {
    this.setState({

    });
    CompanyActions.getAllCompanies(this.generateStateParameters({}));
  },
  exitSliderHandler: function () {
    this.setState({

    });
    CompanyActions.getAllCompanies(this.generateStateParameters({}));
  },
  render: function () {
    return (
      <div className="Main container">
        <div className="row row-centered">
          <h1 className="col-top col-centered">Y Combinator Companies</h1>
        </div>
        <SearchForm 
          searchInputHandler={this.searchInputHandler} 
          statusInputHandler={this.statusInputHandler} 
          classInputHandler={this.classInputHandler}
          yearInputHandler={this.yearInputHandler}
          fundingSliderHandler={this.fundingSliderHandler}
          exitSliderHandler={this.exitSliderHandler}
        ></SearchForm>
        <div className="company-count row row-centered">
          <h3 className="col-top col-centered">{this.state.companies.length} companies</h3>
        </div>
        <CompanyList companies={this.state.companies}></CompanyList>
      </div>
    );
  }
});

module.exports = App;