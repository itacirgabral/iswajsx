function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M45 0L8 5v9l-8 1v4l11-3v-6l31-7v6l12-3V4l-9 1V0z"
}));

export default SvgComponent;