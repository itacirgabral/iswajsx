function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v5.656h-1V1h-4.656V0H19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.758 1.414L11.222 4.95l.707.707 3.536-3.536-.707-.707zM16.879 3.536L13.343 7.07l.707.707 3.536-3.535-.707-.707zM8 0v5.656H7V1H2.344V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.757 1.414L.222 4.95l.707.707L4.464 2.12l-.707-.707zM5.879 3.536L2.343 7.07l.707.707 3.536-3.535-.707-.707z"
}));

export default SvgComponent;