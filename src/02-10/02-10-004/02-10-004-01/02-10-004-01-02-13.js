function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 19l-6-6h12l-6 6zm0-1.406L9.563 14H2.436L6 17.594z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 25c2.485 0 4.5-3.806 4.5-8.5v-8C15 3.806 12.985 0 10.5 0h-2C6.478 0 4.786 2.532 4.219 6h3.937c.346-2.9 1.259-5 2.344-5C11.88 1 13 4.358 13 8.5v8c0 4.142-1.12 7.5-2.5 7.5-.957 0-1.77-1.624-2.188-4H4.406c.706 2.94 2.273 5 4.094 5h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 17.594L2.437 14h7.126L6 17.594z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 13L0 7h12l-6 6zm0-1.406L9.563 8H2.436L6 11.594z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11.594L2.437 8h7.126L6 11.594z",
  fill: "#fff"
}));

export default SvgComponent;