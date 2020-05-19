function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M57 5H15v4h42V5zM4 7v1h7V7H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.5 10a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM7 12v1H0v-1h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 15a2.5 2.5 0 110-5 2.5 2.5 0 110 5zM7 2v1H0V2h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 5a2.5 2.5 0 110-5 2.5 2.5 0 110 5z"
}));

export default SvgComponent;