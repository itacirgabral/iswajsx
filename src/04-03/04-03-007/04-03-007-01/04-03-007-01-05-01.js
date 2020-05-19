function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0a3 3 0 00-3 3c0 2.67.97 5.104 2.563 7L4 9.156a9.395 9.395 0 01-1.906-3.312c.29.093.585.156.906.156a3 3 0 100-6z"
}));

export default SvgComponent;