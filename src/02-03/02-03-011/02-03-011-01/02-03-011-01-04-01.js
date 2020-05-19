function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 .094l-8 8V1H5v11.938l8-8V25h2V.094z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 1v24l8-8v8h2V12.187l-8 8V1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 1v19.188l8-8V25h3V4.937l-8 8V1H2z",
  fill: "#fff"
}));

export default SvgComponent;