function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM53 7v1h-7V7h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM50 12v1h7v-1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM50 2v1h7V2h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z"
}));

export default SvgComponent;