var React = require('react');

var ClassInput = React.createClass({
  classInputHandler: function () {
    var classes = [];
    for (var key in this.refs) {
      if (this.refs[key].checked) {
        classes.push(this.refs[key].value);
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

module.exports = ClassInput;