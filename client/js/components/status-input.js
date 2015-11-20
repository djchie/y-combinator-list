var React = require('react');

var StatusInput = React.createClass({
  statusInputHandler: function () {
    var statuses = [];
    for (var key in this.refs) {
      if (this.refs[key].checked) {
        statuses.push(this.refs[key].value);
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

module.exports = StatusInput;