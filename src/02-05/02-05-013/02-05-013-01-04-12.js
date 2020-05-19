function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.343 17.757L1.08 1.494 2.494.08l16.263 16.263-1.414 1.414zM11 15l-5.5 5.5L0 15h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 12.1L13.1 22H23v-9.9zM16 4C9.925 4 5 8.925 5 15h1C6 9.477 10.477 5 16 5h2V4h-2z"
}));

export default SvgComponent;