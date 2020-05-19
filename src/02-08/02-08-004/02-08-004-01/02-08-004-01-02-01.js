function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h14L7 0zm0 1.438L11.594 6H2.406L7 1.437zM6 7v6a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l.75-.75c.181-.18.443-.281.719-.281a1 1 0 011 1V20c0 3.59-4 10-4 10h10s-4-6.41-4-10v-3.5a3 3 0 00-3-3c-.828 0-1.582.332-2.125.875l-.75.75A2.996 2.996 0 0111 16a3 3 0 01-3-3V7H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1.438L2.406 6h9.188L7 1.437z",
  fill: "#fff"
}));

export default SvgComponent;