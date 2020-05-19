function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h14l-7-7zm0 1.438L12.063 6H2.937L7.5 1.437zM4 7v23l18-18-1.406-1.406L6 25.188V7H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7V17.937l9.469-9.468-1.407-1.406L11 13.125V7H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v18.188l14.594-14.594-2.125-2.125L9 17.938V7H6zM7.5 1.438L2.937 6h9.126L7.5 1.437z",
  fill: "#fff"
}));

export default SvgComponent;