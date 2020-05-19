function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5.656h1V1h4.656V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 1.414L7.778 4.95l-.707.707L3.536 2.12l.707-.707zM2.121 3.536L5.657 7.07l-.707.707-3.536-3.535.707-.707zM11 0v5.656h1V1h4.656V0H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.243 1.414l3.535 3.536-.707.707-3.535-3.536.707-.707zM13.121 3.536l3.536 3.535-.707.707-3.536-3.535.707-.707z"
}));

export default SvgComponent;