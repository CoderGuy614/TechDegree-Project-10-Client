import React from 'react'
import withContext from "../Context"
import Header from "./Header"
const HeaderWithContext = withContext(Header);

export default function NotFound()  {
        return (
        <div id="root">
            <div>
                <HeaderWithContext />
            <div className="bounds">
        <h1>404 - Not Found</h1>
        <p>This page doesn't exist</p>
      </div>
    </div>
  </div>
        )
}
