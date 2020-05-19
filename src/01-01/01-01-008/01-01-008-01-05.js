function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v7h2V2h4v8h2V0H8zM16 18a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.963 24A6 6 0 018 12v6z",
  fill: "#fff"
}));

export default SvgComponent;