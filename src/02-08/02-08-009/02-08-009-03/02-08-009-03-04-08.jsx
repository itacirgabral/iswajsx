import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={10} {...props}>
    <path d="M28.757 1.657l-5.656 5.657a3 3 0 01-4.243 0 2.98 2.98 0 01-.862-1.967l-2.674 2.674a3 3 0 01-4.242 0 2.98 2.98 0 01-.862-1.967L7.544 8.728a4 4 0 01-5.657 0 6 6 0 010-8.485l1.415 1.414a4 4 0 000 5.657 2 2 0 002.828 0l6.055-6.055V5.9c0 .256.114.512.309.708a1 1 0 001.414 0L19.963.552v4.64c0 .256.114.512.31.707a1 1 0 001.413 0L27.343.243l1.414 1.414z" />
  </svg>
);

export default SvgComponent;
