function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 11v1H0v3h2v7h6v-7h7v-3H8v-1H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v9H7z"
}));

export default SvgComponent;