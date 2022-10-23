import { Carousel, Tag } from "antd";
import React from "react";
import HorizontalSection from "../../../../components/HorizontalSection";
import phone1 from "../../../../assets/iphone5c.webp";
import pc1 from "../../../../assets/xps13.jpeg";
import wiiu from "../../../../assets/wiiu.jpeg";
import legion from "../../../../assets/legion.jpg";
import s8 from "../../../../assets/s8.jpeg";
import atari from "../../../../assets/atari.jpg";
import crt from "../../../../assets/crt.jpeg";
import gamecube from "../../../../assets/gamecube.webp";
import { FaTruck } from "react-icons/fa";

import "./index.scss";
import { useNavigate } from "react-router-dom";

type routesProps = {
  children?: React.ReactNode;
};

type ProductCardProps = {
  title?: string;
  condition?: string;
  conditionColor?: string;
  banner?: string;
  year?: number;
  price?: number;
  brand?: string;
  truck?: boolean;
};

const products = [
  {
    title: "iPhone 5C - Unlocked",
    condition: "Great Condition",
    conditionColor: "green",
    banner: phone1,
    year: 2013,
    price: 34.3,
    brand: "Apple",
    truck: true,
  },
  {
    title: "Dell XPS 13",
    condition: "Bad Condition",
    conditionColor: "red",
    banner: pc1,
    year: 2020,
    price: 178.82,
    brand: "Dell",
    truck: false,
  },
  {
    title: "Samsung Galaxy S8 Plus",
    condition: "Bad Condition",
    conditionColor: "red",
    banner: s8,
    year: 2020,
    price: 347.29,
    brand: "Samsung",
    truck: false,
  },
];

const products2 = [
  {
    title: "CRT Monitor/TV",
    condition: "Bad Condition",
    conditionColor: "red",
    banner: crt,
    year: 1998,
    price: 52.73,
    brand: "SONY",
    truck: false,
  },
  {
    title: "Atari 2600",
    condition: "Good Condition",
    conditionColor: "green",
    banner: atari,
    year: 1982,
    price: 120.89,
    brand: "Atari, Inc.",
    truck: true,
  },
  {
    title: "GameCube Console - Luid...",
    condition: "Good Condition",
    conditionColor: "green",
    banner: gamecube,
    year: 2001,
    price: 133.78,
    brand: "Nintendo",
    truck: true,
  },
];

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  condition,
  conditionColor,
  banner,
  year,
  price,
  brand,
  truck,
}) => {
  const navigate = useNavigate();

  return (
    <div className="product-card-wrapper" onClick={() => navigate("/p")}>
      <div className="banner" style={{ backgroundImage: `url(${banner})` }} />
      <div className="info">
        <span className="title">{title}</span>
        <span className="sub-title">By {brand}</span>
        <div>
          <Tag className={conditionColor}>{condition}</Tag>
          <Tag className="blue">{year}</Tag>
        </div>
        <span className="price">${price?.toFixed(2)}</span>
        <span className="truck">{truck ? <FaTruck /> : null}</span>
      </div>
    </div>
  );
};

const Home: React.FC<routesProps> = () => {
  return (
    <div style={{ padding: 10 }}>
      <Carousel dotPosition="bottom" fade className="carousel-wrapper">
        <div>
          <div style={{ backgroundImage: `url(${wiiu})` }} className="banner" />
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${legion})` }}
            className="banner"
          />
        </div>
      </Carousel>

      <HorizontalSection
        title="Trending"
        dataSource={products}
        render={(data) => <ProductCard {...data} />}
      />

      <HorizontalSection
        title="Recommended"
        dataSource={products2}
        render={(data) => <ProductCard {...data} />}
      />
    </div>
  );
};

export default Home;
