function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h14L7 0zm0 1.438L11.563 6H2.437L7 1.437zM6 7v11h13V7h-2v9H8V7H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1.438L2.437 6h9.126L7 1.437z",
  fill: "#fff"
}));

export default SvgComponent;