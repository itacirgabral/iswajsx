function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 5.657l18.385 18.385L25 22.628 6.615 4.243 5.201 5.657zM6 10L.5 15.5 6 21V10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 0L1 9.9V0h9.9zM17 5c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V3h1v2zM13 17l-5.5 5.5L13 28V17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 12c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10v-2h1v2z"
}));

export default SvgComponent;