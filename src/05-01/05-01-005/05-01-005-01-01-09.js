function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M50 5H8v4h42V5zM3 4H2v7h1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
}));

export default SvgComponent;