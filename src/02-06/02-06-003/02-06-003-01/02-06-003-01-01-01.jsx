import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={27} {...props}>
    <path d="M12 0L5.5 6.5 12 13V0z" />
    <path d="M12 4.031v1c5.563.266 10 4.84 10 10.469C22 21.299 17.299 26 11.5 26S1 21.299 1 15.5V14H0v1.5C0 21.851 5.149 27 11.5 27S23 21.851 23 15.5c0-6.184-4.88-11.207-11-11.469z" />
    <path
      d="M12 5.031v3a7.48 7.48 0 017 7.469 7.5 7.5 0 11-15 0V14H1v1.5C1 21.299 5.701 26 11.5 26S22 21.299 22 15.5c0-5.628-4.437-10.203-10-10.469z"
      fill="#fff"
    />
    <path d="M12 8.031v1c3.352.26 6 3.05 6 6.469a6.5 6.5 0 11-13 0V14H4v1.5a7.5 7.5 0 1015 0 7.48 7.48 0 00-7-7.469z" />
  </svg>
);

export default SvgComponent;
