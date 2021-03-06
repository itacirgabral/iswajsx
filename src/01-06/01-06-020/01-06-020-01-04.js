function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h15v15H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.094 6l2.187 2H5v2H3v3h2v6h11v-5.75l2 1.844V10h-.219L16 8.344V8h-.375l-2.156-2H8.094z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.528 8.003L7.375 1.375 7 1C6 0 5 0 5 0H3C0 0 0 3 0 3v3c0 2 2.856 4.043 3 4V6h1C3 6 3 5 3 5V4c0-1 1-1 1-1h1c1 0 2 1 2 1l4.37 4.006"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.37 8.006L19 15c2 2 0 2 0 2h-1v2h2c2 0 2-2 2-2v-1c0-1-1-2-1-2l-6.472-5.997"
}));

export default SvgComponent;