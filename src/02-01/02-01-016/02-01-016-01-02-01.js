function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v1H0zM7 0a4 4 0 00-4 4h1a3 3 0 013-3h1a3 3 0 013 3h1a4 4 0 00-4-4H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1a3 3 0 00-3 3h7a3 3 0 00-3-3H7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h15v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 5h15v2H0z"
}));

export default SvgComponent;