function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 9.1V19h-9.9L21 9.1zm-.994 2.41l-6.497 6.496 6.475-.022.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 4.15a4 4 0 015.657 0l4.243 4.243c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-1.034-5.276-2.829-7.071L6.151 5.565a2 2 0 00-2.829 2.828l2.829 2.829-1.414 1.414-2.829-2.828a4 4 0 010-5.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.908 19.707l.707.707L21.707 1.322 21 .615 1.908 19.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.006 11.51l-.022 6.474-6.475.022 6.497-6.497z",
  fill: "#fff"
}));

export default SvgComponent;