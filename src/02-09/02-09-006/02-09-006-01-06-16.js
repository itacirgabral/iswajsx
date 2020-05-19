function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0l4.5 4.5L13 9V7.562L16.063 4.5 13 1.437V0zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6zM19 6l4.5 4.5L19 15v-1.438l3.063-3.062L19 7.437V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 20c0-5.523 4.477-10 10-10h3v1h-3a9 9 0 00-9 9v6H6v-6z"
}));

export default SvgComponent;