import { Button, Divider, Table, Tag } from "antd";
import React from "react";
import { FaHeart, FaRegHeart, FaTruck } from "react-icons/fa";
import pc1 from "../../../../assets/xps13.jpeg";

import "./index.scss";

const columns = [
  {
    title: "Property",
    dataIndex: "property",
    render: (val: string) => <b>{val}</b>,
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
  },
];

const data = [
  {
    property: "Model",
    value: "A",
  },
  {
    property: "Windows Version",
    value: "Windows 10",
  },
  {
    property: "Dimensions",
    value: '11.63" by 0.55"',
  },
];

type productProps = {
  children?: React.ReactNode;
};

const product: React.FC<productProps> = () => {
  return (
    <div className="product-page">
      <div className="banner" style={{ backgroundImage: `url("${pc1}")` }} />

      <div className="product-info">
        <span className="title">Dell XPS 13 (2016) - Light White</span>
        <span className="sub-title">
          By Dell - <span style={{ color: "#27ae60" }}>Good Condition</span>
        </span>

        <span className="heart">
          <FaRegHeart />
        </span>
      </div>

      <Divider>Pricing</Divider>

      <div className="product-price">
        <span className="old-cost">$338.99</span>
        <span className="cost">
          $276<span className="cents">99</span>
          <span className="discount">22.3% OFF</span>
        </span>

        <div className="delivery-box">
          <div className="icon">
            <FaTruck />
          </div>
          <div className="info">
            <span className="title">Free Shipping</span>
            <span className="description">
              On purchases above $100.00, shipping is free across the nation.
              Enjoy! 😀
            </span>
          </div>
        </div>

        <div className="buttons">
          <Button block className="quick-purchase-button">
            Quick Purchase
          </Button>
          <Button block className="cart-button">
            Add To Cart
          </Button>
        </div>

        <Divider>Key Specifications</Divider>

        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          showHeader={false}
          style={{ marginBottom: 20 }}
        />
      </div>
    </div>
  );
};

export default product;
