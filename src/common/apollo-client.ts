import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'https://humble-guppy-90.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':
      'IW0rz4JxfFHl15no8s7kpxsorGRYC08dMCPGZdy5glo9txwVVsV0Yl5ViiP6BtfF'
  }
});

export default client;
