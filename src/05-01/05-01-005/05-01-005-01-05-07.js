function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42v4H0V6zM50 7v1h7V7h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM53 12v1h-7v-1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM53 2v1h-7V2h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z"
}));

export default SvgComponent;