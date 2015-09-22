
/* ---------- Search Form View ---------- */

var SearchInput = React.createClass({displayName: "SearchInput",
  searchInputHandler: function () {
    var searchString = this.refs.searchInput.getDOMNode().value;
    this.props.searchInputHandler(searchString);
  },
  render: function () {
    return (
      React.createElement("div", {className: "searchInput input-group col-top col-centered col-md-6"}, 
        React.createElement("label", {for: "searchInput"}, "Search"), 
        React.createElement("input", {id: "searchInput", className: "form-control", type: "text", ref: "searchInput", placeholder: "Name, Description, etc...", onChange: this.searchInputHandler})
      )
    );
  }
});

var StatusInput = React.createClass({displayName: "StatusInput",
  statusInputHandler: function () {
    var statuses = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        statuses.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.statusInputHandler(statuses);
  },
  render: function () {
    return (
      React.createElement("div", {className: "statusInput input-group col-top col-centered col-md-2"}, 
        React.createElement("label", {className: "checkbox"}, "Status"), 
        React.createElement("div", {className: "checkbox"}, 
          React.createElement("label", null, 
            React.createElement("input", {type: "checkbox", value: "Operating", ref: "operatingInput", onChange: this.statusInputHandler}), 
            "Operating"
          )
        ), 
        React.createElement("div", {className: "checkbox"}, 
          React.createElement("label", null, 
            React.createElement("input", {type: "checkbox", value: "Exited", ref: "exitedInput", onChange: this.statusInputHandler}), 
            "Exited"
          )
        ), 
        React.createElement("div", {className: "checkbox"}, 
          React.createElement("label", null, 
            React.createElement("input", {type: "checkbox", value: "Dead", ref: "deadInput", onChange: this.statusInputHandler}), 
            "Dead"
          )
        )
      )
    );
  }
});

var ClassInput = React.createClass({displayName: "ClassInput",
  classInputHandler: function () {
    var classes = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        classes.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.classInputHandler(classes);
  },
  render: function () {
    return (
      React.createElement("div", {className: "classInput input-group col-top col-centered col-md-2"}, 
        React.createElement("label", {className: "checkbox"}, "Class"), 
        React.createElement("div", {className: "checkbox"}, 
          React.createElement("label", null, 
            React.createElement("input", {type: "checkbox", value: "6", ref: "summerInput", onChange: this.classInputHandler}), 
            "Summer"
          )
        ), 
        React.createElement("div", {className: "checkbox"}, 
          React.createElement("label", null, 
            React.createElement("input", {type: "checkbox", value: "1", ref: "winterInput", onChange: this.classInputHandler}), 
            "Winter"
          )
        )
      )
    );
  }
});

var YearInput = React.createClass({displayName: "YearInput",
  yearInputHandler: function () {
    var years = [];
    for (var key in this.refs) {
      if (this.refs[key].getDOMNode().checked) {
        years.push(this.refs[key].getDOMNode().value);
      }
    }
    this.props.yearInputHandler(years);
  },
  render: function () {
    return (
      React.createElement("div", {className: "yearInput input-group col-top col-centered col-md-3"}, 
        React.createElement("label", {className: "checkbox"}, "Year"), 
        React.createElement("div", {className: "row row-top"}, 
          React.createElement("div", {className: "controls col-md-4"}, 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2015", ref: "2015Input", onChange: this.yearInputHandler}), 
                "2015"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2014", ref: "2014Input", onChange: this.yearInputHandler}), 
                "2014"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2013", ref: "2013Input", onChange: this.yearInputHandler}), 
                "2013"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2012", ref: "2012Input", onChange: this.yearInputHandler}), 
                "2012"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2011", ref: "2011Input", onChange: this.yearInputHandler}), 
                "2011"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2010", ref: "2010Input", onChange: this.yearInputHandler}), 
                "2010"
              )
            )
          ), 
          React.createElement("div", {className: "controls col-md-4"}, 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2009", ref: "2009Input", onChange: this.yearInputHandler}), 
                "2009"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2008", ref: "2008Input", onChange: this.yearInputHandler}), 
                "2008"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2007", ref: "2007Input", onChange: this.yearInputHandler}), 
                "2007"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2006", ref: "2006Input", onChange: this.yearInputHandler}), 
                "2006"
              )
            ), 
            React.createElement("div", {className: "checkbox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", value: "2005", ref: "2005Input", onChange: this.yearInputHandler}), 
                "2006"
              )
            )
          )
        )
      )
    );
  }
});

var SearchForm = React.createClass({displayName: "SearchForm",
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
  render: function () {
    return (
      React.createElement("div", {className: "searchForm"}, 
        React.createElement("div", {className: "row row-centered"}, 
          React.createElement(SearchInput, {searchInputHandler: this.searchInputHandler})
        ), 
        React.createElement("div", {className: "row row-centered"}, 
          React.createElement(StatusInput, {statusInputHandler: this.statusInputHandler}), 
          React.createElement(ClassInput, {classInputHandler: this.classInputHandler}), 
          React.createElement(YearInput, {yearInputHandler: this.yearInputHandler})
        )
      )
    );
  }
});

/* ---------- Company List View ---------- */

// To use company logos, use the following as the src image
// src={"https://logo.clearbit.com/" + this.props.data.imageUrl} onerror="this.src = '../assets/yc-logo.png'"
var CompanyCell = React.createClass({displayName: "CompanyCell",
  render: function () {
    return (
      React.createElement("div", {className: "companyCell col-centered col-md-9"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-2"}, 
            React.createElement("img", {className: "company-logo", src: "../assets/yc-logo.png"})
          ), 
          React.createElement("div", {className: "col-md-8"}, 
            React.createElement("div", null, 
              this.props.data.name, " - ", this.props.data.status
            ), 
            React.createElement("div", null, 
              React.createElement("a", {href: "{this.props.data.websiteUrl}"}, this.props.data.websiteUrl)
            ), 
            React.createElement("div", null, 
              this.props.data.description
            )
          ), 
          React.createElement("div", {className: "col-md-2"}, 
            React.createElement("div", null, 
              this.props.data.cohort
            ), 
            React.createElement("div", null, 
              this.props.data.year
            ), 
            React.createElement("div", null, 
              this.props.data.fundingValue
            ), 
            React.createElement("div", null, 
              this.props.data.exitValue
            )
          )
        )
      )
    );
  }
});

var CompanyList = React.createClass({displayName: "CompanyList",
  render: function () {
    var companyNodes = this.props.companies.map(function (company) {
      return (
        React.createElement(CompanyCell, {data: company})
      );
    });
    return (
      React.createElement("div", {className: "companyList row row-centered"}, 
        companyNodes
      )
    );
  }
});

/* ---------- Main View ---------- */

var App = React.createClass({displayName: "App",
  getInitialState: function () {
    return {
      searchString: '',
      companies: []
    };
  },
  retrieveCompanies: function (parameters) {
    $.ajax({
      url: '/companies',
      dataType: 'json',
      type: 'GET',
      data: parameters,
      success: function (companies) {
        console.log('Successfully got data');
        this.setState({
          searchString: this.state.searchString,
          companies: companies
        });
      }.bind(this),
      error: function (xhr, status, error) {
        console.log('Failed to get data');
        console.log('Error with GET /companies: ' + status + ' - ' + error);
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.retrieveCompanies();
  },
  searchInputHandler: function (searchString) {
    this.setState({
      searchString: searchString,
      companies: this.state.companies
    });
    this.retrieveCompanies({
      searchString: searchString
    });
  },
  statusInputHandler: function (statuses) {
    console.log(statuses);
  },
  classInputHandler: function (classes) {
    console.log(classes);
  },
  yearInputHandler: function (years) {
    console.log(years)
  },
  render: function () {
    return (
      React.createElement("div", {className: "Main container"}, 
        React.createElement("div", {className: "row row-centered"}, 
          React.createElement("h1", {className: "col-top col-centered"}, "Y Combinator List")
        ), 
        React.createElement(SearchForm, {
          searchInputHandler: this.searchInputHandler, 
          statusInputHandler: this.statusInputHandler, 
          classInputHandler: this.classInputHandler, 
          yearInputHandler: this.yearInputHandler
        }), 
        React.createElement(CompanyList, {companies: this.state.companies})
      )
    );
  }
});

/* ---------- Render Main View ---------- */

React.render(
  React.createElement(App, null),
  document.getElementById('main')
);