function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0L9 6v21h12V6l-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 2.813l-4 4V10H9v3h2v12h4V13h6v-3h-6V2.812z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 16v2h9v-2H0z"
}));

export default SvgComponent;