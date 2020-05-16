import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={49} {...props}>
    <path d="M.172.514v11.314L11.486.514H.172z" />
    <path d="M4.414 7.586L3 9l6.364 6.364-8.485 8.485 9.192 9.193-9.9 9.9 1.415 1.413 11.313-11.313-9.192-9.193 8.485-8.485-7.778-7.778z" />
    <path d="M8.657 3.343L7.243 4.757l10.606 10.607-8.485 8.485 9.192 9.193L4.414 47.184l1.414 1.414 15.557-15.556-9.193-9.193 8.486-8.485L8.657 3.344z" />
    <path
      d="M7.243 4.757L4.414 7.586l7.778 7.778-8.485 8.485 9.192 9.193L1.586 44.355l2.828 2.829 14.142-14.142-9.192-9.193 8.485-8.485L7.243 4.757z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
