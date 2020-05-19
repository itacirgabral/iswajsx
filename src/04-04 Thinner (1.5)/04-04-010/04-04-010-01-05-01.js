function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.969.406L19 4.438 17.937 5.5 14.97 2.531 12 5.5H0V4h11.375L14.969.406z"
}));

export default SvgComponent;