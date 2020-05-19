function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 19l7-7 7 7H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 0v19a3 3 0 01-6 0h-6c0 2.761 2.686 5 6 5h3a5 5 0 005-5V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 13v1h9v-1H0zm17 0v1h16v-1H17z"
}));

export default SvgComponent;