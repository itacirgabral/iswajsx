function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M34 18l-9 9-9-9h18zm-2.406 1H18.406L25 25.563 31.594 19zM18 0a9 9 0 019 9v9h-4V8a6 6 0 00-6-6H0V0h18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.594 19L25 25.563 18.406 19h13.188z",
  fill: "#fff"
}));

export default SvgComponent;