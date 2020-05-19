function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0l7 7H0l7-7zm0 1.406L2.437 6h9.126L7 1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.5 1A8.5 8.5 0 0137 9.5v4c0 1.933 2.462 3.5 5.5 3.5s5.5-1.567 5.5-3.5V3h2v10.5a7.5 7.5 0 11-15 0v-4a6.5 6.5 0 10-13 0V13a8 8 0 11-16 0V7h2v6c0 2.21 2.686 4 6 4s6-1.79 6-4V9.5A8.5 8.5 0 0128.5 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1.406L11.563 6H2.437L7 1.406z",
  fill: "#fff"
}));

export default SvgComponent;