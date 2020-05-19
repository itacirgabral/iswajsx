function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 11h15v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 13h6v11h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v7h2V2h4v7h2V0h-8zM0 18v2h6v-2H0z"
}));

export default SvgComponent;