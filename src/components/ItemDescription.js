import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";

const associateColors = [
  { type: "TV", color: "geekblue" },
  { type: "Movie", color: "volcano" },
  { type: "Special", color: "magenta" },
  { type: "ONA", color: "purple" },
  { type: "OVA", color: "cyan" }
];

function ItemDescription(props) {
  return (
    <div className="container ItemDescription__container">
      <h1>{props.location.state.title}</h1>
      {props.location.state.data.map(item => {
        if (item.title === props.location.state.title) {
          return (
            <div className="row">
              <div className="col-12 col-md-6 col-xl-6 col-sm-12 d-flex justify-content-md-end justify-content-center">
                <img src={item.image_url} alt="poke_img" />
              </div>
              <div className="col-12 col-md-6 col-xl-6 col-sm-12">
                <p>{item.synopsis}</p>
                <div className="Description__score">
                  {item.score >= 7 && (
                    <span style={{ color: "#0ee67b", fontWeight: "bold" }}>
                      {item.score}
                    </span>
                  )}
                  {item.score > 6 && item.score < 7 && (
                    <span style={{ color: "#ebc500", fontWeight: "bold" }}>
                      {item.score}
                    </span>
                  )}
                  {item.score <= 6 && (
                    <span style={{ color: "#ff0015", fontWeight: "bold" }}>
                      {item.score}
                    </span>
                  )}
                </div>
                <div>
                  {associateColors.map((el, i) =>
                    el.type === item.type ? (
                      <Tag
                        key={i + el}
                        color={el.color}
                        className="Description__tag"
                      >
                        {item.type}
                      </Tag>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}

      <Link className="Back__button" to="/">
        Back
      </Link>
    </div>
  );
}

export default ItemDescription;
