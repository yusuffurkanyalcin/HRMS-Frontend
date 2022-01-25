import React, { useEffect } from "react";
import managerImage from "../images/manager.jpg";
import styles from "../styles/category.module.css"
export default function Categories() {
  useEffect(() => {
    console.log(managerImage);
  }, []);

  return (
    <div className="container">
      
      <div className="card mb-3 " style={{maxWidth:"540px"}}>
        <div className="row g-0">
          <div className="col-md-7">
            <img
              src={managerImage}
              className="img-fluid rounded-start"
              alt="Manager picture"
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is manager card</p>
              <p className="card-text">
                <small className="text-muted">Last updated ..</small>
              </p>
            </div>
          </div>
        </div>
      </div>
     

      <div
        className="card  text-dark "
        style={{ maxWidth: "540px" }}
      >
        <img
          src={managerImage}
          className="card-img img-fluid rounded-start"
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title">
            <strong>CARD TITLE</strong>{" "}
          </h5>
          <p className="card-text">
            <strong>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </strong>
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

/*

*/
