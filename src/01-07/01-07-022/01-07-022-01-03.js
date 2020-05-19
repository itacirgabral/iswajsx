function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 9v8h2V9H2zm4 0v8h2V9H6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8H6V3s0 3 0 0 3-3 3-3h5v2H9s1 0 0 0-1 1-1 1v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4v4h4V4H9z"
}));

export default SvgComponent;