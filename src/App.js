import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

import GlobalStyle from './Styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default App;
