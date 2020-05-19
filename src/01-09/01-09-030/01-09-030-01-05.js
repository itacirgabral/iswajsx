function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 8h15v13H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 10h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C0 0 0 5 0 5v3h2V5c0-3 3-3 3-3 3 0 3 3 3 3v1h2V5c0-5-5-5-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2s-1.077-.009-1.938.625L7 17.281V9.5L5 2z"
}));

export default SvgComponent;