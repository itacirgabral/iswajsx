function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.031.406L0 4.438 1.063 5.5 4.03 2.531 7 5.5h9l2.969-2.969L21.937 5.5 23 4.437 18.969.407 15.375 4h-7.75L4.031.406z"
}));

export default SvgComponent;