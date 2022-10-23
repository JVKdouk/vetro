import clsx from "clsx";
import React from "react";
import {
  FaCartPlus,
  FaHome,
  FaList,
  FaPen,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.scss";

type FooterProps = {
  children?: React.ReactNode;
};

const items = [
  { icon: <FaHome />, path: "/h" },
  { icon: <FaList />, path: "/o" },
  { icon: <FaPlus />, path: "/p/new" },
  { icon: <FaUser />, path: "/u" },
  { icon: <FaCartPlus />, path: "/o/cart" },
];

const Footer: React.FC<FooterProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formattedMenu = items.map((item) => {
    const isActive = location.pathname == item.path;
    const className = clsx([isActive && "active"]);
    return (
      <li className={className} onClick={() => navigate(item.path)}>
        {item.icon}
      </li>
    );
  });

  return (
    <div className="footer-wrapper">
      <ul className="menu-items">{formattedMenu}</ul>
    </div>
  );
};

export default Footer;
