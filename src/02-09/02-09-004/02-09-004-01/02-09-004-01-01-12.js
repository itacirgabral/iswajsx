function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.562 34l-7-12.124L0 31.438 9.562 34zM32 0v7c0 9-5 8-5 8-2 0-3-3-6-3-5 0-8 4-8 7v1c0 4-1 7-7.219 7.438l1.032 1.78C11 29 15 27 15 20v-1c0-3 3-5 6-5s3 2 6 2c5 0 7-4.052 7-9V0h-2z"
}));

export default SvgComponent;