import React from "react";

import "./index.scss";

type AvatarProps = {
  children?: React.ReactNode;
  size?: number;
};

const Avatar: React.FC<AvatarProps> = ({ size = 50 }) => {
  return (
    <div className="avatar-wrapper" style={{ width: size, height: size }}></div>
  );
};

export default Avatar;
