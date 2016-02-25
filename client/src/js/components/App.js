import React from 'react';
import {connect} from 'react-redux';

export const App = React.createClass({
  render: function() {
    return <div className="main">
      hello, {this.props.name}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    name: state.get('name')
  };
}

export const AppContainer = connect(mapStateToProps)(App);
