function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h28a6 6 0 016 6c0 2.21-2.686 4-6 4H18v4h10a8 8 0 100-16H0z"
}));

export default SvgComponent;