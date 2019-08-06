import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// 1
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { gql } from "apollo-boost";

// 2
const httpLink = createHttpLink({
  uri: "http://localhost:3000"
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      {
        joke(category: "animal") {
          url
          value
          id
        }
      }
    `
  })
  .then(result => console.log(result));

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
