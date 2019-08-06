import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

const categories = () => (
  <Query
    query={gql`
      {
        categories {
          value
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

class Categories extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody />
        </Card>
      </div>
    );
  }
}
export default Categories;
