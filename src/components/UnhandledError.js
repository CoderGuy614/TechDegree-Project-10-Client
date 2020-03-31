import React from 'react'
import withContext from "../Context"
import Header from "./Header"
const HeaderWithContext = withContext(Header);

export default function UnhandledError() {
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
