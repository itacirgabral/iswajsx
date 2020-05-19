function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 0v20.188L14 8.155v19.032L1.406 14.594 0 16l16 16V13l12 12V0h-2z"
}));

export default SvgComponent;