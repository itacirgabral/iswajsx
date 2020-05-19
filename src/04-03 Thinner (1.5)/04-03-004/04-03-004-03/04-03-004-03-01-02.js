function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.75 0v3H0v1h2.75v2H0v1h2.75v5h1.5V7H7V6H4.25V4H7V3H4.25V0h-1.5z"
}));

export default SvgComponent;