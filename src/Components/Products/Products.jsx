import React from "react";
import "./Product.css";
import granite from "../../assets/granite.jpg";
import importedgranite from "../../assets/importedgranite.jpg";
import onyx from "../../assets/onyx.jpg";
import quartz from "../../assets/quartz.jpg";
import sandstone from "../../assets/sandstone.jpg";
import marble from "../../assets/marble.jpg";

const Products = () => {
  return (
    <div className="productss container">
      <div className="gallery">
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
        <img src={marble} className="imgg" />
      </div>
    </div>
  );
};

export default Products;
