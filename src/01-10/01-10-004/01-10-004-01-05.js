function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 2v2H0v3h2v6h6V7h7V4H8V2H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v10c0 2.03-1 2-1 2v3s3 .05 3-5V0h-2z"
}));

export default SvgComponent;