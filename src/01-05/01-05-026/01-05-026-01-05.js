function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0L0 6v21h12V6L6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l-4 4V10H0v3h2v12h4V13h6v-3H6V2.812z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.531 2.219L11 6.75 12 10l5.656-5.656-2.125-2.125z"
}));

export default SvgComponent;