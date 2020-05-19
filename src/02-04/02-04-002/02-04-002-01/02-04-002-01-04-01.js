function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 0h2v15H1V0zM6 0h2v15H6V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v15h3V0H3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;