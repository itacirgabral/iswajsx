function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 18l9 9 9-9H0zm2.406 1h13.188L9 25.563 2.406 19zM16 0a9 9 0 00-9 9v9h4V8a6 6 0 016-6h17V0H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.406 19L9 25.563 15.594 19H2.406z",
  fill: "#fff"
}));

export default SvgComponent;