var React = require('react');
var SearchInput = require('./search-input');
var StatusInput = require('./status-input');
var ClassInput = require('./class-input');
var YearInput = require('./year-input');

var SearchForm = React.createClass({
  searchInputHandler: function (searchString) {
    this.props.searchInputHandler(searchString);
  },
  statusInputHandler: function (statuses) {
    this.props.statusInputHandler(statuses);
  },
  classInputHandler: function (classes) {
    this.props.classInputHandler(classes);
  },
  yearInputHandler: function (years) {
    this.props.yearInputHandler(years);
  },
  fundingSliderHandler: function () {
    this.props.fundingSliderHandler();
  },
  exitSliderHandler: function () {
    this.props.exitSliderHandler();
  },
  render: function () {
    return (
      <div className="searchForm">
        <div className="row row-centered">
          <SearchInput searchInputHandler={this.searchInputHandler}></SearchInput>
        </div>
        <div className="row row-centered">
          <StatusInput statusInputHandler={this.statusInputHandler}></StatusInput>
          <ClassInput classInputHandler={this.classInputHandler}></ClassInput>
          <YearInput yearInputHandler={this.yearInputHandler}></YearInput>
        </div>
      </div>
    );
  }
});

module.exports = SearchForm;