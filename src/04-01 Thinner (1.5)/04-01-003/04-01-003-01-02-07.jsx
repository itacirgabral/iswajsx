import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={48} {...props}>
    <path d="M9.531 14.938C3.875 17.837 0 23.706 0 30.5 0 40.165 7.835 48 17.5 48S35 40.165 35 30.5c0-6.793-3.875-12.663-9.531-15.563l-.688 1.344C29.95 18.934 33.5 24.291 33.5 30.5c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-6.208 3.55-11.566 8.719-14.219l-.688-1.343z" />
    <path d="M22.5 16l-5-5-.719.719L21.063 16l-4.282 4.281.719.719 5-5z" />
    <path d="M18.5 14v1h-6v-1h6zM18.5 17v1h-6v-1h6zM22.5 5l-5-5-.719.719L21.063 5 16.78 9.281 17.5 10l5-5z" />
    <path d="M18.5 3v1h-6V3h6zM18.5 6v1h-6V6h6z" />
  </svg>
);

export default SvgComponent;
