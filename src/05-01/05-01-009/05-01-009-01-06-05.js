function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 12a3 3 0 110-6 3 3 0 010 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.75 7h1.5V0h-1.5v7z"
}));

export default SvgComponent;