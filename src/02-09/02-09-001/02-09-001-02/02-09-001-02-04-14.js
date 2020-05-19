function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v6a4 4 0 004 4h13v4H7a7 7 0 01-7-7V0h2z"
}));

export default SvgComponent;