function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v8a5 5 0 01-5 5H0v4h14a8 8 0 008-8V0h-2z"
}));

export default SvgComponent;