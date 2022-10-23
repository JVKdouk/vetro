import React from "react";
import { FaChevronRight } from "react-icons/fa";

import "./index.scss";

type SectionProps = {
  children?: React.ReactNode;
  dataSource?: any[];
  render?: (data: any) => React.ReactNode;
  title: string;
};

const HorizontalSection: React.FC<SectionProps> = ({
  dataSource = [],
  render = () => null,
  title,
}) => {
  return (
    <div className="horizontal-section-wrapper">
      <span className="title">
        {title} <FaChevronRight />
        <span className="view-all">View All</span>
      </span>

      <ul className="horizontal-items">
        {dataSource.map((data) => render(data))}
      </ul>
    </div>
  );
};

export default HorizontalSection;
