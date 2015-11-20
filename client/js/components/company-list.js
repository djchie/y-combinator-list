var React = require('react');
var CompanyCell = require('./company-cell');

var CompanyList = React.createClass({
  render: function () {
    var companyNodes = this.props.companies.map(function (company, i) {
      return (
        <CompanyCell company={company} key={i}></CompanyCell>
      );
    });
    return (
      <div className="companyList row row-centered">
        {companyNodes}
      </div>
    );
  }
});

module.exports = CompanyList;