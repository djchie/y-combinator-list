var React = require('react');

var CompanyList = React.createClass({
  render: function () {
    var companyNodes = this.props.companies.map(function (company) {
      return (
        <CompanyCell company={company}></CompanyCell>
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