import React from "react";

const NavBar = ({ totalOrder }) => {
  return (
    <div
      style={{ display: totalOrder ? "block" : "none" }}
      className="site-header page-navbar"
    >
      <h6>
        Total ${totalOrder.toFixed(2)} - ${(totalOrder * 1.13).toFixed(2)}{" "}
        (+taxes)
      </h6>
    </div>
  );
};

export default NavBar;
