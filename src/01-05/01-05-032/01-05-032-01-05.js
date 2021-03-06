function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h8v18H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 1h3v16H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v4H2v4H0V0h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.625 5.813L.219 7.218 6 13v-2.813L1.625 5.814z"
}));

export default SvgComponent;