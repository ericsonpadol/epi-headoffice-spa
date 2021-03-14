import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Footer = ({ company, message, element }) => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>{message}</p>
                    <p>Developed by: {company}</p>
                </div>
                <div>{element}</div>
            </footer>
        </Fragment>
    )
}

Footer.propTypes = {
    company: PropTypes.string.isRequired,
    message: PropTypes.string
}

export default Footer
