function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0h15v15H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 2h11v11H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h14V0H0zM6.406 2L14 9.563V6.75L9.25 2H6.406z"
}));

export default SvgComponent;