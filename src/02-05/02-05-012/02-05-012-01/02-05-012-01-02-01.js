function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0L9 7h14l-7-7zm0 1.437L20.563 6h-9.125L16 1.437zM15 7v11.188l-8-8.032v10.031l-5.594-5.593L0 16l9 9V15l8 8V7h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 1.437L11.437 6h9.126L16 1.437z",
  fill: "#fff"
}));

export default SvgComponent;