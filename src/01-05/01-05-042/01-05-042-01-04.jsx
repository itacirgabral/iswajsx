import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={17} {...props}>
    <path d="M13 0C6.875 0 6.096 4.602 6 5.75V6c0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 6 0 6 6 6 6 0 6.125-5.348 6.904-6.688 7H12c-1.098 0-2.094-.098-3-.281L8.5 16.5c2.009.486 3.5.5 3.5.5 9 0 9-9 9-9 0-8-8-8-8-8zM1.906 9.719L0 10.813c1.718 2.744 4.282 4.275 6.594 5.124l.468-1.78c-2.5-.972-4.114-2.665-5.156-4.438z" />
    <path
      d="M13 2S8 2 8 6c0 0 0 4 4 4h3v2h2.938C18.584 11.022 19 9.73 19 8c0 0 0-6-6-6z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
