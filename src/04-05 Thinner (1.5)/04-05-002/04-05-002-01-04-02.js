function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 4,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v3.182h1.016V1.724l2.166 2.165.707-.707-2.165-2.166h1.458V0H0z"
}));

export default SvgComponent;