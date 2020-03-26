import React, { Component } from 'react'
import withContext from "../Context"
import Header from "../components/Header"
const HeaderWithContext = withContext(Header);

export default class Error extends Component {
    render() {
        return (
            <div id="root">
            <div>
                  <HeaderWithContext />
                </div>
                <h1>Error</h1>
                <p>Sorry! We just encountered an unexpected error.</p>
              </div>
         
         
        )
    }
}
