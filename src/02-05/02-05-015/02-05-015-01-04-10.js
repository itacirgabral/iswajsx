function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.799 5.615L4.414 24 3 22.586 21.385 4.2l1.414 1.414zM22 10l5.5 5.5L22 21V10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.1 0L27 9.9V0h-9.9zM11 5c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V3h-1v2zM11 12L5.5 6.5 0 12h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 23C9.925 23 5 18.075 5 12h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;