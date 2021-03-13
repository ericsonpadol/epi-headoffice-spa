import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Header = ({ welcome }) => {
    return (
        <Fragment>
            <div className="level">
                Welcome {welcome} to Express Pay!
            </div>
        </Fragment>

    )
}

Header.propTypes = {
    welcome: PropTypes.string.isRequired
}

export default Header
