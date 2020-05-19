function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 27
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 15,
  height: 14,
  y: 13,
  ry: 0
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 15h6v10H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 2v6h2V4h2v7h2V2H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11V0H1v6h2V2h2v9h2z",
  fillRule: "evenodd"
}));

export default SvgComponent;