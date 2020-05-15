import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0v7s-.123 5.46-1 8c-.634 1.837-3 5-3 5h2.281S4.431 17.158 5 15.5C5.925 12.801 6 7 6 7V0H4zM14 0v7s.075 5.801 1 8.5c.568 1.658 2.719 4.5 2.719 4.5H20s-2.366-3.163-3-5c-.877-2.54-1-8-1-8V0h-2zM10 5a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z" />
    <path d="M11 8a1 1 0 11-2 0 1 1 0 112 0zM10 12a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z" />
    <path d="M11 15a1 1 0 11-2 0 1 1 0 112 0z" />
  </svg>
);

export default SvgComponent;
