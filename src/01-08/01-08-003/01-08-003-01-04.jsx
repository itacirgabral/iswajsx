import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 11c-6.125 0-6.904 4.602-7 5.75V17c0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 6 0 6 6 6 6 0 6.125-5.348 6.904-6.688 7H12c-1.098 0-2.094-.099-3-.281L8.5 27.5c2.009.486 3.5.5 3.5.5 9 0 9-9 9-9 0-8-8-8-8-8zM1.906 20.719L0 21.812c1.718 2.745 4.282 4.276 6.594 5.125l.468-1.78c-2.5-.972-4.114-2.665-5.156-4.438z" />
    <path
      d="M13 13s-5 0-5 4c0 0 0 4 4 4h3v2h2.938c.647-.978 1.062-2.27 1.062-4 0 0 0-6-6-6z"
      fill="#fff"
    />
    <path d="M19 0v10.813a8.655 8.655 0 012 1.843V0h-2zM8 3v7.25c.671-.346 1.36-.602 2-.781V3H8zM2 9L.594 10.406l3.844 3.844c.24-.7.578-1.32.968-1.844v-.031L2 9z" />
  </svg>
);

export default SvgComponent;
