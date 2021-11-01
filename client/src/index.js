import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:4000/graphql "})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>,  
  document.getElementById('root')
);

