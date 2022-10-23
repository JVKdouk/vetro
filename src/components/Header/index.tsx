import React from "react";
import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import "./index.scss";

type HeaderProps = {
  children?: React.ReactNode;
};

const pathTitles = {
  "/h": "Store",
  "/p": "Dell XPS 13",
  "/p/new": "Donate",
};

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();

  const titles = pathTitles[location.pathname as keyof typeof pathTitles];

  return (
    <div className="header-wrapper">
      <div className="left">
        <span>{titles}</span>
      </div>
      <div className="right">
        <FaBell color="#aaa" size={18} />

        <Avatar size={40} />
      </div>
    </div>
  );
};

export default Header;
