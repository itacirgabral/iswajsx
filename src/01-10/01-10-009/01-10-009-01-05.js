function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 6v6H0v3h2v2h6v-2h7v-3H6V6H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 5v6h2V5H7zm4 0v6h2V5h-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h4v4H2z"
}));

export default SvgComponent;