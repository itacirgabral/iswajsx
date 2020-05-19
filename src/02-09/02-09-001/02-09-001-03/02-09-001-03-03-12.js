function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v2l-6 6 6 6v2l-8-8 8-8zM22 0v2a5 5 0 015 5v1a5 5 0 01-5 5H8v4h13a8 8 0 008-8V7a7 7 0 00-7-7z"
}));

export default SvgComponent;