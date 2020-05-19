function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 3v30h15V18H6V3H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 20H6v11h11V20z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 1.5a3 3 0 100 6 3 3 0 000-6z",
  fill: "#fff"
}));

export default SvgComponent;