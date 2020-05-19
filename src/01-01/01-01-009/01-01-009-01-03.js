function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 11h15v15H6zM0 0v7h2V2h4v9h2V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 11v8h2v-8h-2zm5 0v8h2v-8h-2z",
  fill: "#fff"
}));

export default SvgComponent;