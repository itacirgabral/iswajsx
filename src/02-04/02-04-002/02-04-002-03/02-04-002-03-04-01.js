function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h2v34H2V0zM8 0h2v34H8V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v34h4V0H4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
}));

export default SvgComponent;