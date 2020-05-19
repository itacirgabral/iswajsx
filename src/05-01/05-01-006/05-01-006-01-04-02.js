function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.586 7.758l-.707.707L2.101.687l.707-.708zM8.465 9.879l-.707.707-7.779-7.778.708-.707z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9.879 8.465L8.465 9.879.687 2.101 2.1.687z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 12V4.929h-1.016v6.055H4.929V12H12z"
}));

export default SvgComponent;