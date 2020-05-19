function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0H.929v1.016h6.055v6.055H8V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.818 2.475l.707.707-4.243 4.243-.707-.707 4.243-4.243z"
}));

export default SvgComponent;