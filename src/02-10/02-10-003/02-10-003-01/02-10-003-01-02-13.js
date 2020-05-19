function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 18l-6-6h12l-6 6zm0-1.406L9.563 13H2.436L6 16.594z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 25c2.485 0 4.5-3.806 4.5-8.5v-8C15 3.806 12.985 0 10.5 0h-2C6.015 0 4 3.806 4 8.5V11h4V8.5C8 4.358 9.12 1 10.5 1S13 4.358 13 8.5v8c0 4.142-1.12 7.5-2.5 7.5-1.085 0-1.998-2.1-2.344-5H4.22c.567 3.468 2.259 6 4.281 6h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 16.594L2.437 13h7.126L6 16.594z",
  fill: "#fff"
}));

export default SvgComponent;