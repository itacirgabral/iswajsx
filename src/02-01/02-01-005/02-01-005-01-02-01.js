function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v4H0v2h4v4h2V6h4V4H6V0H4zM16 0v4h-4v2h4v4h2V6h4V4h-4V0h-2zM28 0v4h-4v2h4v4h2V6h4V4h-4V0h-2z"
}));

export default SvgComponent;