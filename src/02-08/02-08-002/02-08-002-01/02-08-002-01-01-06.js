function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 24l-7 7-7-7h14zM4 0a4 4 0 014 4v5.563C8.591 9.22 9.267 9 10 9a4 4 0 014 4v4c0 2.539 3 7 3 7H9s3-4.461 3-7v-4a2 2 0 10-4 0v3H6V4a2 2 0 00-4 0v5H0V4a4 4 0 014-4z"
}));

export default SvgComponent;