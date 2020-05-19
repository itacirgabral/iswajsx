function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.56 15.854l9.193-9.192-1.415-1.415-9.192 9.193zM6.975 19l11.258-6.5-1-1.732-11.258 6.5zM1.732 13.025l6.5-11.258-1.732-1L0 12.025z"
}));

export default SvgComponent;