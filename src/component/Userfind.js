import React from "react";

const Userfind = ({ name, image }) => {
  return (
    <React.Fragment>
      <div className="row" style={{ position: "relative", left: "40%" }}>
        <div className="col s2">
          <div className="card small">
            <div className="card-image ">
              <img src={image} alt="users" style={{ width: "250px" }} />
              <span className="card-title orange-text">{name}</span>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              eum vero ipsam commodi omnis ut voluptate, .
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Userfind;
