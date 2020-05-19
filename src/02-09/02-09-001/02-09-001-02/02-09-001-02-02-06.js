function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0l-8 8h16l-8-8zm0 1.438L23.594 7H12.406L18 1.437zM17 8v6a4 4 0 01-4 4H0v4h12a7 7 0 007-7V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 1.438L12.406 7h11.188L18 1.437z",
  fill: "#fff"
}));

export default SvgComponent;