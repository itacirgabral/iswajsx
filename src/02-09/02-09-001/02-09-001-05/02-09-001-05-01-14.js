function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 45,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 7v14l-7-7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37 0a8 8 0 010 16h-6v-4h6c3.314 0 6-1.79 6-4a6 6 0 00-6-6H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h7v4H8A8 8 0 118 0h29z"
}));

export default SvgComponent;