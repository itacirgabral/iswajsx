function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h2v15H0V0zM5 0h2v15H5V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v15h3V0H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v7h3V0H2z"
}));

export default SvgComponent;