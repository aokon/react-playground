import React, { Component } from 'react';

export default (WrappedComponent, onDidMount) => (class extends Component {
  componentDidMount() {
    onDidMount(this.props);
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
});
