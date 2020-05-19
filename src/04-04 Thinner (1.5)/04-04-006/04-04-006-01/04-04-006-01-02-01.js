function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v6h9V0H0zm1 1.5h7v3H1v-3z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 2,
  x: 4,
  y: 1
}));

export default SvgComponent;