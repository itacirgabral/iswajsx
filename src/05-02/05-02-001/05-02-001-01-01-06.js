function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.719 0L0 1l17.906 31H57v-2H19.062L1.72 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.719 0l17.343 30H57v-1H19.625L2.875 0H1.719zM0 1v2l16.75 29h1.156L0 1z",
  fill: "#fff"
}));

export default SvgComponent;