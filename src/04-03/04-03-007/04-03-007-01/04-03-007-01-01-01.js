function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0A5.5 5.5 0 00.031 6.063 19.9 19.9 0 005.25 19l2.125-2.125a17.004 17.004 0 01-3.531-6.125c.524.166 1.077.25 1.656.25a5.5 5.5 0 000-11z"
}));

export default SvgComponent;