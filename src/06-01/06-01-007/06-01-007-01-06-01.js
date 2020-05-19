function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0L0 6v21h12V6L6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l-4 4V10H0v8h2v7h8v-7h2v-8h-2V6.812l-4-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 9a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 10.5a3 3 0 100 6 3 3 0 000-6z",
  fill: "#fff"
}));

export default SvgComponent;