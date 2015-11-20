var React = require('react');

var SearchInput = React.createClass({
  searchInputHandler: function () {
    var searchString = this.refs.searchInput.value;
    this.props.searchInputHandler(searchString);
  },
  render: function () {
    return (
      <div className="searchInput input-group col-top col-centered col-md-6">
        <label htmlFor="searchInput">Search</label>
        <input id="searchInput" className="form-control" type="text" ref="searchInput" placeholder="Name, Description, etc..." onChange={this.searchInputHandler}></input>
      </div>
    );
  }
});

module.exports = SearchInput;