function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12l7 7 7-7H0zm2.438 1h9.124L7 17.563 2.437 13zM12 0C8.134 0 5 3.582 5 8c0 1.49-2 4-2 4h8S9 9.49 9 8c0-3.314 1.343-6 3-6 2.21 0 4 3.582 4 8h1c0-5.523-2.239-10-5-10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 13L7 17.563 11.563 13H2.437z",
  fill: "#fff"
}));

export default SvgComponent;