import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={24} {...props}>
    <path d="M0 0v8a3 3 0 003 3 2.98 2.98 0 002-.781V14a3 3 0 003 3 2.98 2.98 0 002-.781V20a4 4 0 004 4 6 6 0 006-6h-2a4 4 0 01-4 4 2 2 0 01-2-2v-8.563L8.719 14.72A1.015 1.015 0 018 15a1 1 0 01-1-1V5.437L3.719 8.72A1.015 1.015 0 013 9a1 1 0 01-1-1V0H0z" />
  </svg>
);

export default SvgComponent;
