function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0l11 1v6l31 5v8l8 1v4l-11-3v-5L8 9V4L0 2V0z"
}));

export default SvgComponent;