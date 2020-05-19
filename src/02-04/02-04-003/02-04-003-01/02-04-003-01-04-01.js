function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h2v15H2V0zM7 0h2v15H7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v15h3V0H4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9l-3 6h11L8 9H3z"
}));

export default SvgComponent;