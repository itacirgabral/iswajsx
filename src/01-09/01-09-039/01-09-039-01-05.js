function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h13v15H16z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M18 6h5v11h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v3l14 .017V4H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.375.156l-.688.688L14 12.188V10.75L3.375.156z"
}));

export default SvgComponent;