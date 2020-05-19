function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.343 17.757L1.08 1.494 2.494.08l16.263 16.263-1.414 1.414zM6 10L.5 15.5 6 21V10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 12.1L13.1 22H23v-9.9zM17 5c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V3h1v2z"
}));

export default SvgComponent;