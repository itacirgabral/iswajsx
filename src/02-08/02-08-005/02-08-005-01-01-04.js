function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 9.1l9.9 9.9H1V9.1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.092 4.15a4 4 0 00-5.657 0l-4.243 4.243c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s1.034-5.276 2.829-7.071l4.242-4.243a2 2 0 012.829 2.828l-2.829 2.829 1.414 1.414 2.829-2.828a4 4 0 000-5.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.092 19.707l-.707.707L.293 1.322 1 .615l19.092 19.092z"
}));

export default SvgComponent;