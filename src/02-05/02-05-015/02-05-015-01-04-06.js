function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.799 18.385L4.414 0 3 1.414 21.385 19.8l1.414-1.414zM22 14l5.5-5.5L22 3v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.1 24l9.9-9.9V24h-9.9zM11 19c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2zM11 12l-5.5 5.5L0 12h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 1C9.925 1 5 5.925 5 12h1C6 6.477 10.477 2 16 2h2V1h-2z"
}));

export default SvgComponent;