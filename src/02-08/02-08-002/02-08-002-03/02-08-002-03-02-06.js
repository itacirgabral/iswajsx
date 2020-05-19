function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 29l-7 7-7-7h14zm-2.438 1h-9.125L19 34.594 23.563 30zM4 0a4 4 0 014 4v3.563A3.99 3.99 0 0110 7a4 4 0 014 4v3.563c.591-.342 1.267-.563 2-.563a4 4 0 014 4v4c0 2.539 3 7 3 7h-8s3-4.461 3-7v-4a2 2 0 00-4 0v3h-2V11a2 2 0 00-4 0v3H6V4a2 2 0 00-4 0v4H0V4a4 4 0 014-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.563 30L19 34.594 14.437 30h9.126z",
  fill: "#fff"
}));

export default SvgComponent;