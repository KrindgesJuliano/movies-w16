import React from 'react';
import Routes from './routes';

import GlobalStyle from './Styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
