import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'https://humble-guppy-90.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET!
  }
});

export default client;
