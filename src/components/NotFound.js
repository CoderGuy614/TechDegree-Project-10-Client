import React, { Component } from 'react'
import withContext from "../Context"
import Header from "./Header"
const HeaderWithContext = withContext(Header);

export default class NotFound extends Component {
    render() {
        return (
            <div id="root">
    <div>
        <HeaderWithContext />
        <div class="bounds">
        <h1>404 - Not Found</h1>
        <p>This page doesn't exist</p>
      </div>
    </div>
  </div>
        )
    }
}
