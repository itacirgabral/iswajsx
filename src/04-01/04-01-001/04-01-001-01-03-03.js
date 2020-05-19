function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M35 24c0-9.665-7.835-17.5-17.5-17.5S0 14.335 0 24s7.835 17.5 17.5 17.5S35 33.665 35 24zm-2 0c0 8.56-6.94 15.5-15.5 15.5C8.94 39.5 2 32.56 2 24 2 15.44 8.94 8.5 17.5 8.5 26.06 8.5 33 15.44 33 24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0h-7v6.844a17.61 17.61 0 013.5-.344c1.198 0 2.37.115 3.5.344V0zm0 41.156a17.61 17.61 0 01-3.5.344 17.61 17.61 0 01-3.5-.344V48h7v-6.844z"
}));

export default SvgComponent;