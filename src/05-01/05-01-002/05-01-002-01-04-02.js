function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M50 0L39 1v6L8 12v8l-8 1v4l11-3v-5l31-8V4l8-2V0z"
}));

export default SvgComponent;