import { ApolloProvider } from '@apollo/client';
import React from 'react';
import './common/styles';
import EmployeeBoard from './components/EmployeeBoard/EmployeeBoard';
import client from './common/apollo-client';

const App = () => (
  <ApolloProvider client={client}>
    <EmployeeBoard />
  </ApolloProvider>
);

export default App;
