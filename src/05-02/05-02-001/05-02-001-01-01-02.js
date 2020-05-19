function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v40l14-24.25-1.719-1L2 32.594V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v32.594L12.281 14.75l1.719 1v-1.156l-2.094-1.219L3 28.813V0H2zm12 15.75L0 40h1.156L14 17.75v-2z",
  fill: "#fff"
}));

export default SvgComponent;