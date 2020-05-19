function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 2v4H4v2h4v4h2V8h4V6h-4V2H8zM0 0h2v15H0zM16 0h2v15h-2zM32 0h2v15h-2zM24 2v4h-4v2h4v4h2V8h4V6h-4V2h-2z"
}));

export default SvgComponent;