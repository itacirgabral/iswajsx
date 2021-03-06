function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 21l7 7 7-7H0zm2.438 1h9.124L7 26.563 2.437 22zM10 0a4 4 0 00-4 4v10c0 2.539-3 7-3 7h8s-2.542-3.794-2.938-6.375c.428.235.915.375 1.438.375a3 3 0 000-6 2.98 2.98 0 00-1.5.406V4a2 2 0 012-2 1 1 0 011 1v5h2V3a3 3 0 00-3-3zm-.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 22L7 26.563 11.563 22H2.437z",
  fill: "#fff"
}));

export default SvgComponent;