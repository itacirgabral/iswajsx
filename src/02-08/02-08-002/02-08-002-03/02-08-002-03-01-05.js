function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 29l7 7 7-7H0zM22 0a4 4 0 00-4 4v3.563A3.99 3.99 0 0016 7a4 4 0 00-4 4v3.563c-.591-.342-1.267-.563-2-.563a4 4 0 00-4 4v4c0 2.539-3 7-3 7h8s-3-4.461-3-7v-4a2 2 0 014 0v3h2V11a2 2 0 014 0v3h2V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4z"
}));

export default SvgComponent;