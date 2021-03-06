function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.585 20.55l-5.657-5.656-1.414 1.414 4.243 4.243-4.243 4.242 1.414 1.415 5.657-5.657zM1.273.952l-.75.719a31.24 31.24 0 013.625 2.344h1.656A32.86 32.86 0 001.273.952zm9.656 8.407l.031 1.875c.944 1.668 1.57 3.418 1.969 5.25l1.219 1.218a19.976 19.976 0 00-3.22-8.343zm3.25 14.03l-1.25 1.22a19.263 19.263 0 01-1.75 4.875l.875.5a20.177 20.177 0 002.125-6.594zM10 5v8H8V7H2V5h8z"
}));

export default SvgComponent;