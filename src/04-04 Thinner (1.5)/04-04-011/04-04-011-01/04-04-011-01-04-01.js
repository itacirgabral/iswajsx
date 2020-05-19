function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 8a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3S16.38 7 15 7v1zM4 8V7C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1V0a4 4 0 100 8z"
}));

export default SvgComponent;