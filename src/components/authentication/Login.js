import React, {Fragment, useState} from 'react'

import {Input, Button, Space} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons'

// import PropTypes from 'prop-types'

const Login = () => {
  const [state, setState] = useState({username: '', password: ''});
  return (
    <Fragment>
      <div className="section mt-6">
        <Space direction="vertical" style={{alignItems: 'center', width: '100%'}}>
          <div className="control">
            <div className="field">
              <Input size="large" placeholder="username" prefix={<UserOutlined/>}
                     onChange={(event) => setState({...state, username: event.target.value})}/>
            </div>
            <div className="field">
              <Input.Password size="large" placeholder="password" prefix={<LockOutlined/>}/>
            </div>
            <div className="is-pulled-right">
              <Button type="primary" onClick={() => console.debug({state})}>Login</Button>
            </div>
          </div>
        </Space>
      </div>
    </Fragment>
  )
}

Login.propTypes = {}

export default Login
