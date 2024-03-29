import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// Dependencies
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Connect to GraphQLAPI
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql"
});

// Intialise APolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


// Render Component
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
