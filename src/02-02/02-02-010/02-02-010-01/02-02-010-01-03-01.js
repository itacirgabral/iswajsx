function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 .563l-6 6.03L1.406 8 6 3.437l5 5.157 5-5.156 5 5.156 5-5.156L30.594 8 32 6.594 26 .562l-5 5.032-5-5.032-5 5.032L6 .562z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6.563l-6 6.03L1.406 14 6 9.437l5 5.157 5-5.156 5 5.156 5-5.156L30.594 14 32 12.594l-6-6.031-5 5.03-5-5.03-5 5.03-5-5.03z"
}));

export default SvgComponent;