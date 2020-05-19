function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h2v42H0V0zM6 0h2v42H6V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v42h4V0H2z",
  fill: "#fff"
}));

export default SvgComponent;