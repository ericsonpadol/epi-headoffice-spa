import React, { Fragment } from 'react'

import Logo from '../Logo';

const Branding = () => {
  return (
    <Fragment>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <Logo/>
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </Fragment>
  )
}

export default Branding
