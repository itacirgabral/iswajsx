function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 4.243L21.92 20.506l-1.414 1.414L4.243 5.657l1.414-1.414zM12 7l5.5-5.5L23 7H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.9L9.9 0H0v9.9zM7 18c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H5v1h2z"
}));

export default SvgComponent;