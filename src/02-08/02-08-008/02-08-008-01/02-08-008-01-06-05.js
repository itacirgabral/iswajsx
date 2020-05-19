function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 4l-6 6h2l4-4 4 4h2L6 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v10a4 4 0 01-4 4c-1.657 0-3-1.79-3-4H3a6 6 0 006 6h3a5 5 0 005-5V0h-1z"
}));

export default SvgComponent;