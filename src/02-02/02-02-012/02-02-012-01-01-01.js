function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0l-5 5 .719.719L5.5 1.437 9.781 5.72 10.5 5l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 4h1v6h-1V4zM6.5 4h1v6h-1V4z"
}));

export default SvgComponent;