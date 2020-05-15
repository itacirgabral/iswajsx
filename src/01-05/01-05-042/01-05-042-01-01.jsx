import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 0C6.875 0 6.096 4.602 6 5.75V6c0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 6 0 6 6 6 6 0 6.125-5.348 6.904-6.688 7H12c-5.519 0-8.484-2.54-10.094-5.281L0 10.813C3.872 16.997 12 17 12 17c9 0 9-9 9-9 0-8-8-8-8-8z" />
    <path
      d="M13 2S8 2 8 6c0 0 0 4 4 4h3v2h2.938C18.584 11.022 19 9.73 19 8c0 0 0-6-6-6z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
