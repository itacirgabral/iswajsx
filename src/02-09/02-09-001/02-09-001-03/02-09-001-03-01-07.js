function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 16L0 8l8-8v16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v2h12a5 5 0 015 5v1a5 5 0 01-5 5H4v4h15a8 8 0 008-8v-2a7 7 0 00-7-7H8z"
}));

export default SvgComponent;