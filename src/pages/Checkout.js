import Header from "parts/Header";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Checkout extends Component {
  render() {
    return (
      <>
        <Header isCentered />
      </>
    );
  }
}

export default withRouter(Checkout);
