function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 10h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 12h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9v1c-.003.062 0 4 4 4h4v-2H4s-2 0-2-2V9H0zM4 4C0 4 0 8 0 8v1h2V8c0-2 2-2 2-2h3c2 0 2 2 2 2h2c0-4-4-4-4-4H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1C5.3 1 4.441 2.815 4.156 4H6.25C6.776 3.02 8 3 8 3h2c2 0 2 2 2 2v3h2V5c0-4-4-4-4-4H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0c-1.298 0-2.158.431-2.75 1H10s1.606-.005 2.781 1H14c2 0 2 2 2 2v4h2V4c0-4-4-4-4-4h-2z"
}));

export default SvgComponent;