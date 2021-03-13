import React, { Fragment, useState } from 'react'

import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'

// import PropTypes from 'prop-types'

const Login = () => {
    const [state, setState] = useState({ username: '', password: '' });
    return (
        <Fragment>
            <div className="section">
                <Input size="large" placeholder="username" prefix={<UserOutlined />} onChange={(event) => setState({ ...state, username: event.target.value })} />
                <Input.Password size="large" placeholder="password" prefix={<LockOutlined />} />
                <Button type="primary" onClick={() => console.debug({ state })}>Login</Button>
            </div>
        </Fragment>
    )
}

Login.propTypes = {

}

export default Login
