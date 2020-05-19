function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h2l6-6 6 6h2L8 0zM9 8v6a4 4 0 004 4h13v4H14a7 7 0 01-7-7V8h2z"
}));

export default SvgComponent;