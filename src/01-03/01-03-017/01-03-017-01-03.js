function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 15h15v15H3zM3 3h2v12H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v15.188h2V0H8zM0 15v10s0 5 3 5v-3s-1 0-1-3v-9H0z"
}));

export default SvgComponent;