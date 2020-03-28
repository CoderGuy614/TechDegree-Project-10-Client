import React, { Component } from 'react'
import withContext from "../Context"
import Header from "./Header"
const HeaderWithContext = withContext(Header);

export default class Forbidden extends Component {
    render() {
        return (
            <div id="root">
    <div>
        <HeaderWithContext />
        <div class="bounds">
        <h1>Forbidden</h1>
        <p>Oh oh! You can't access this page.</p>
      </div>
    </div>
  </div>
        )
    }
}
