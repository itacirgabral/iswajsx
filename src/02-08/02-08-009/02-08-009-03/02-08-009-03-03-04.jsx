import React from "react";

const SvgComponent = (props) => (
  <svg width={40} height={17} {...props}>
    <path d="M10 2H.1l1.415 1.414h7.07v7.071L10 11.9V2z" />
    <path d="M38.284.586l-7.778 7.778a1 1 0 01-1.414 0 1.015 1.015 0 01-.31-.707v-4.64l-1.988 1.988-6.895 6.894a1 1 0 01-1.414 0 1.015 1.015 0 01-.31-.707v-4.64l-1.988 1.989-5.48 5.48a3 3 0 01-4.243 0c-1.171-1.172-.855-3.388.708-4.95L2.929 4.828a6 6 0 000 8.486l2.121 2.121a5 5 0 007.071 0l4.088-4.088a2.98 2.98 0 00.862 1.967 3 3 0 004.243 0l5.502-5.502a2.98 2.98 0 00.862 1.966 3 3 0 004.242 0L39.698 2 38.284.586z" />
  </svg>
);

export default SvgComponent;
