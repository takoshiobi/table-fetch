import React from "react";
import { Link } from "react-router-dom";

class ItemDescription extends React.Component {
  render() {
    return (
        <div className="container">
            <h1>Title of the Pokemon movie</h1>
            <div className="col-12 col-md-6 col-xl-6 col-sm-12">
            </div>
            <div className="col-12 col-md-6 col-xl-6 col-sm-12">
            <div>Synopsis djfskhfhsjdfkhsjdkfhsdkjfhkjf hsdkjfhsdfhjksdfh shdfjkhsdjf</div>
            <div>1.3</div>
            <div>Movie</div>
            </div>
            <Link to="/">Back</Link>
        </div>
    )
  }
}

export default ItemDescription;
