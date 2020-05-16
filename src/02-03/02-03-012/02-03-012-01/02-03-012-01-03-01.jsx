import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={28} {...props}>
    <path d="M.613.481v9.906L2.55 8.45l-.031-6H8.55L10.52.48H.613z" />
    <path d="M4.464 6.536L3.05 7.95l2.829 2.828-4.243 4.243 4.243 4.242L2.343 22.8l1.414 1.414 4.95-4.95-4.243-4.242 4.243-4.243-4.243-4.242z" />
    <path d="M8 3L6.586 4.414l6.364 6.364-4.243 4.243 4.243 4.242-7.071 7.072 1.414 1.414 8.485-8.486-4.242-4.242 4.242-4.243L8 3z" />
    <path
      d="M6.586 4.414L4.464 6.536l4.243 4.242-4.243 4.243 4.243 4.242-4.95 4.95 2.122 2.122 7.07-7.072-4.242-4.242 4.243-4.243-6.364-6.364z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
