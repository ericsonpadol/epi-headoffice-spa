import React, { Fragment } from 'react';

import { Button, message, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import Header from './components/commons/Header';
import Login from './components/authentication/Login';
import Footer from './components/commons/Footer';

import './App.css';



const App = () => {
  const success = () => message.success('Welcome Jake Ortega!');
  const myMessage = 'Hello World! ExpressPay!';

  return (<Fragment>
    <div className="container is-widescreen">
      <Header title="Express Pay Inc." subtitle="Enterprise Backoffice Administration"/>
      <Login />
      <Button onClick={success}>Hello</Button>
      <Footer company="Teknolohiya Inc." message={myMessage} element={<Avatar size={64} icon={<UserOutlined />} />} />
    </div>
  </Fragment>);
};

export default App;
