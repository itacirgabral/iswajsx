function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h15v15H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.188 6L18 14.094v-2.875L12.375 6H9.187zM5 8v11h6V8H5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0C0 0 0 3 0 3v3c0 2 2.856 4.043 3 4V6h1C3 6 3 5 3 5V4c0-1 1-1 1-1h1c1 0 2 1 2 1l2.188 2h3.187l-5-4.625L7 1C6 0 5 0 5 0H3zM18 11.219v2.875L19 15c2 2 0 2 0 2h-1v2h2c2 0 2-2 2-2v-1c0-1-1-2-1-2l-3-2.781z"
}));

export default SvgComponent;