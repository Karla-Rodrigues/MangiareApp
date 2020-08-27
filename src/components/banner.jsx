import React, { Component } from "react";

function Greats() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Good Morning!!";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Afternoon!!";
  } else {
    timeOfDay = "Good Night!!";
  }

  return timeOfDay;
}

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className="page-banner">
        <div className="picture-banner">
          <div className="row">
            <div className="col">
              <h2>
                <strong>Mangiari</strong> Delivery
              </h2>
            </div>
            <div className="col">
              <h4>{Greats()} </h4>
              <h4> Visit us or place your delivery order today</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
