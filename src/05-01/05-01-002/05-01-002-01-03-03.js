function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2l39 9v6l11 3v-4l-8-1V6L0 0z"
}));

export default SvgComponent;