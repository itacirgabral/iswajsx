function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 14a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 16a6 6 0 100 12 6 6 0 000-12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v14.25a8.054 8.054 0 012-.25V0h-2zM6 3l-1.781.906 5.968 11.719a7.887 7.887 0 011.72-1L6 3zM2 10L.594 11.406l7.187 7.188c.295-.625.623-1.227 1.063-1.75L2 10z"
}));

export default SvgComponent;