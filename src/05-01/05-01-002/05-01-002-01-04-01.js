function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 46,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M37 0v8H6v8H0v4h9v-8h31V4h6V0h-9z"
}));

export default SvgComponent;