function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.5.5L10 6h11L15.5.5zm0 1.438L18.563 5h-6.125L15.5 1.937zM15 6v5a3 3 0 01-3 3H0v3h11a5 5 0 005-5V6h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 1.938L12.437 5h6.126L15.5 1.937z",
  fill: "#fff"
}));

export default SvgComponent;