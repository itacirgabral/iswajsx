function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.615 5.201L24 23.586 22.586 25 4.2 6.615l1.414-1.414zM10 6L15.5.5 21 6H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10.9L9.9 1H0v9.9zM5 17c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H3v1h2zM12 17l-5.5 5.5L12 28V17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 12c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10v-2h1v2z"
}));

export default SvgComponent;