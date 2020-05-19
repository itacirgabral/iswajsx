function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 24l7 7 7-7H0zM16 0a4 4 0 00-4 4v5.563C11.409 9.22 10.733 9 10 9a4 4 0 00-4 4v4c0 2.539-3 7-3 7h8s-3-4.461-3-7v-4a2 2 0 014 0v3h2V4a2 2 0 014 0v5h2V4a4 4 0 00-4-4z"
}));

export default SvgComponent;