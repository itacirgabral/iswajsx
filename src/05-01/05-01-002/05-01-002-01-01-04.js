function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12V8h6V0h34v8h6v4h-9V4H9v8H0z"
}));

export default SvgComponent;