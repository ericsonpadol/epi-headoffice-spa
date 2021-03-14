import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Branding from './header/Branding';

const Header = ({ title, subtitle }) => {
    return (
        <Fragment>
          <nav className="navbar m-5" role="navigation" aria-label="main navigation">
            <div className="navbar-start is-hidden-mobile">
              <div>
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
              </div>
            </div>
            <div className="navbar-end">
              <Branding/>
            </div>
          </nav>
        </Fragment>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default Header
