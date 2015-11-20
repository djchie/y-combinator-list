var React = require('react');

var YearInput = React.createClass({
  yearInputHandler: function () {
    var years = [];
    for (var key in this.refs) {
      if (this.refs[key].checked) {
        years.push(this.refs[key].value);
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
                2005
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = YearInput;