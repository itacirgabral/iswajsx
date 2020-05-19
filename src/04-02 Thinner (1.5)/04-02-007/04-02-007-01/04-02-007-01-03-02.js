function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v5.656h1V1h4.656V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.414 4.243L4.95 7.778l.707-.707L2.12 3.536l-.707.707zM3.536 2.121L7.07 5.657l.707-.707-3.535-3.536-.707.707z"
}));

export default SvgComponent;