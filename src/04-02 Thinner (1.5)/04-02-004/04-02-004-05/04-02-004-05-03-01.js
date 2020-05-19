function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.719 15L7 15.719l2.625 2.594 2.594-2.594L11.5 15l-1.875 1.875L7.719 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 15l-.719.719 2.625 2.594L16 15.719 15.28 15l-1.875 1.875L11.5 15zM11.5 10C9.015 10 7 11.79 7 14h1c0-1.38 1.567-2.5 3.5-2.5S15 12.62 15 14h1c0-2.21-2.015-4-4.5-4z"
}));

export default SvgComponent;