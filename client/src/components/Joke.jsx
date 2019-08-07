import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import BgndImg from "../assests/images/harley-davidson.jpg";

class Categories extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const category = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf("/") + 1, this.props.location.pathname.length)
    return (
      <div>
        <Query
    query={gql`
    {
          joke(category: "${category}"){
                value
                id
                url
                icon_url
                created_at
            }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="carousel slide" data-ride="carousel" id="carousel1">
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" className="active" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={BgndImg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-block centered">
              <div className="card text-center centered" style={{width: "120%", backgroundColor: "black"}}>
        <div className="card-header">
          {"Random - "}{category}{" Chuck Norris Joke"}
        </div>
        <div className="card-body">
          <img src={data.joke.icon_url} />
          {/* <h5 className="card-title">{data.joke.url}</h5> */}
          <p className="card-text">{ data.joke.value}</p>
          <a href="/categories" className="btn btn-primary">Go Back</a>
        </div>
        <div className="card-footer text-muted">
          {data.joke.created_at}
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
