function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h7V0H0zM10.5 3a2 2 0 01-2-2V0h4v1a2 2 0 01-2 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 6c-2.21 0-4-2.239-4-5V0h1v1a3 3 0 006 0V0h1v1c0 2.761-1.79 5-4 5z"
}));

export default SvgComponent;