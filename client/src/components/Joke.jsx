import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Joke = () => (
  <Query
    query={gql`
      {
        joke(category: "animal") {
          url
          value
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

export default Joke;
