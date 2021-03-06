function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 17h15v13H8zM10 0H8v15h2V0zM3 14s-3 0-3 3v3h2v-3s0-1 1-1h4v-2H3zM0 25v2s0 3 3 3h4v-2H3s-1 0-1-1v-2H0z"
}));

export default SvgComponent;