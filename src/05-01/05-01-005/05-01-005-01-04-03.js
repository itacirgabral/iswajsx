function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42v4H0V6zM48 9V8h7v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46.5 6a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM48 3V2h7v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46.5 0a2.5 2.5 0 110 5 2.5 2.5 0 110-5zM48 15v-1h7v1h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46.5 12a2.5 2.5 0 110 5 2.5 2.5 0 110-5z"
}));

export default SvgComponent;