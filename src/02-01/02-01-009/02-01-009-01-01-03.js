function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4v3H1v2h3v3H1v2h3v3h2v-3h3v3h2v-3h3v-2h-3V9h3V7h-3V4H9v3H6V4H4zm2 5h3v3H6V9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M6 9h3v3H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v2H0zM0 19h15v2H0z"
}));

export default SvgComponent;