import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import history from "./history";
import BgndImg from "../assests/images/harley-davidson.jpg";
import {
  Input
} from "reactstrap";

class Categories extends Component {
  render() {
    return (
      <div>
        <Query
    query={gql`
      {
        categories 
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
        <div className="carousel slide" data-ride="carousel" id="carousel1">
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" className="active" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={BgndImg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-block centered">
              <div md={6} sm={12} xs={12} className="centered">
                <h4 >Select Category</h4>
         <select 
         className="form-control form-control-lg" 
         onChange={(e) =>
        
          history.push(`./joke/${e.target.value}`)}
        >
         { data.categories.map((cat) => (
            <option value={cat}>{cat}</option>
         ))
         }
          </select>         
        </div>
              </div>
            </div>
          </div>          
        </div>
        </div>
       
      )
    }}
  </Query>
      </div>
    );
  }
}
export default Categories;
