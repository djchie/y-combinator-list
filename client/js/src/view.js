
/* ---------- Search Form View ---------- */

var SearchInput = React.createClass({
  searchInputHandler: function () {
    var searchString = this.refs.searchInput.getDOMNode().value;
    this.props.searchInputHandler(searchString);
  },
  render: function () {
    return (
      <div className="searchInput input-group col-top col-centered col-md-6">
        <label for="searchInput">Search</label>
        <input id="searchInput" className="form-control" type="text" ref="searchInput" placeholder="Name, Description, etc..." onChange={this.searchInputHandler}></input>
      </div>
    );
  }
});

var StatusInput = React.createClass({
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
      <div className="statusInput input-group col-top col-centered col-md-2">
        <label className="checkbox">Status</label>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Operating" ref="operatingInput" onChange={this.statusInputHandler}></input>
            Operating
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Exited" ref="exitedInput" onChange={this.statusInputHandler}></input>
            Exited
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="Dead" ref="deadInput" onChange={this.statusInputHandler}></input>
            Dead
          </label>
        </div>
      </div>
    );
  }
});

var ClassInput = React.createClass({
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
      <div className="classInput input-group col-top col-centered col-md-2">
        <label className="checkbox">Class</label>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="6" ref="summerInput" onChange={this.classInputHandler}></input>
            Summer
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="1" ref="winterInput" onChange={this.classInputHandler}></input>
            Winter
          </label>
        </div>
      </div>
    );
  }
});

var YearInput = React.createClass({
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
      <div className="yearInput input-group col-top col-centered col-md-3">
        <label className="checkbox">Year</label>
        <div className="row row-top">
          <div className="controls col-md-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2015" ref="2015Input" onChange={this.yearInputHandler}></input>
                2015
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2014" ref="2014Input" onChange={this.yearInputHandler}></input>
                2014
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2013" ref="2013Input" onChange={this.yearInputHandler}></input>
                2013
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2012" ref="2012Input" onChange={this.yearInputHandler}></input>
                2012
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2011" ref="2011Input" onChange={this.yearInputHandler}></input>
                2011
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2010" ref="2010Input" onChange={this.yearInputHandler}></input>
                2010
              </label>
            </div>
          </div>
          <div className="controls col-md-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2009" ref="2009Input" onChange={this.yearInputHandler}></input>
                2009
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2008" ref="2008Input" onChange={this.yearInputHandler}></input>
                2008
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2007" ref="2007Input" onChange={this.yearInputHandler}></input>
                2007
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2006" ref="2006Input" onChange={this.yearInputHandler}></input>
                2006
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="2005" ref="2005Input" onChange={this.yearInputHandler}></input>
                2006
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var FundingSlider = React.createClass({
  render: function () {
    return (
      <div>Funding Slider</div>
    );
  }
});

var ExitSlider = React.createClass({
  render: function () {
    return (
      <div>Exit Slider</div>
    );
  }
});

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
        <div className="row row-centered">
          <FundingSlider fundingSliderHandler={this.fundingSliderHandler}></FundingSlider>
        </div>
        <div className="row row-centered">
          <ExitSlider exitSliderHandler={this.exitSliderHandler}></ExitSlider>
        </div>
      </div>
    );
  }
});

/* ---------- Company List View ---------- */

// To use company logos, use the following as the src image
// src={"https://logo.clearbit.com/" + this.props.data.imageUrl} onerror="this.src = '../assets/yc-logo.png'"
var CompanyCell = React.createClass({
  clickHandler: function () {
    console.log('Cell clicked!');
    console.log(this.props.company.websiteUrl);
    window.open(this.props.company.crunchBaseUrl, '_blank');
  },
  render: function () {
    var statusClass = this.props.company.status.toLowerCase();
    var classString = 'Summer';
    if (this.props.company.cohort === 1) {
      classString = 'Winter';
    }
    var descriptionString = this.props.company.description;
    if (descriptionString === '0') {
      descriptionString = 'Description not available';
    }

    var fundedValue = this.props.company.fundingValue;
    // Not sure why we need to compare it to a string...
    if (fundedValue === '0') {
      fundedValue = 'N/A';
    } else {
      fundedValue = '$' + accounting.formatNumber(fundedValue);
    }

    var exitedAtValue = this.props.company.exitValue;
    if (exitedAtValue === 0) {
      exitedAtValue = 'N/A';
    } else {
      exitedAtValue = '$' + accounting.formatNumber(exitedAtValue);
    }

    return (
      <div className="companyCell col-centered col-md-9" onClick={this.clickHandler}>
        <div className="row">
          <div className="col-md-2">
            <img className="company-logo" src="../assets/yc-logo.png"></img>
          </div>
          <div className="col-md-8">
            <div>
              <span className="company-name">{this.props.company.name}</span> - <span className={statusClass}>{this.props.company.status}</span>
            </div>
            <div>
              <a href="{this.props.company.websiteUrl}" target="_blank">{this.props.company.websiteUrl}</a>
            </div>
            <div>
              {descriptionString}
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <span className="class-year">{classString} / {this.props.company.year}</span>
            </div>
            <div>
              Funded:
              <div className="value-figure">
                {fundedValue}
              </div>
            </div>
            <div>
              Exited At:
              <div className="value-figure">
                {exitedAtValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

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

/* ---------- Main View ---------- */

var App = React.createClass({
  getInitialState: function () {
    return {
      searchString: '',
      statuses: [],
      classes: [],
      years: [],
      companies: []
    };
  },
  retrieveCompanies: function (parameters) {
    console.log('Sending: ');
    console.log(parameters);
    $.ajax({
      url: '/companies',
      dataType: 'json',
      type: 'GET',
      data: parameters,
      success: function (companies) {
        console.log('Successfully got data');
        this.setState({
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
    this.retrieveCompanies(this.generateStateParameters());
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
    this.retrieveCompanies(this.generateStateParameters({searchString: searchString}));
  },
  statusInputHandler: function (statuses) {
    this.setState({
      statuses: statuses
    });
    this.retrieveCompanies(this.generateStateParameters({statuses: statuses}));
  },
  classInputHandler: function (classes) {
    this.setState({
      classes: classes
    });
    this.retrieveCompanies(this.generateStateParameters({classes: classes}));
  },
  yearInputHandler: function (years) {
    this.setState({
      years: years
    });
    this.retrieveCompanies(this.generateStateParameters({years: years}));
  },
  fundingSliderHandler: function () {
    this.setState({

    });
    this.retrieveCompanies(this.generateStateParameters({}));
  },
  exitSliderHandler: function () {
    this.setState({

    });
    this.retrieveCompanies(this.generateStateParameters({}));
  },
  render: function () {
    return (
      <div className="Main container">
        <div className="row row-centered">
          <h1 className="col-top col-centered">Y Combinator List</h1>
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

/* ---------- Render Main View ---------- */

React.render(
  <App></App>,
  document.getElementById('main')
);