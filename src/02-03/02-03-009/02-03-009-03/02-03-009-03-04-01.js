function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v31L24 7l-1.406-1.406L2 26.187V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v16.5L19.75 2.75l-1.406-1.406L8 11.688V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v26.188L22.594 5.593 19.75 2.75 6 16.5V0H2z",
  fill: "#fff"
}));

export default SvgComponent;