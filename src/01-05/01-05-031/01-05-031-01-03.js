function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h8v18h-8zM11 0v4H7v3H4V0h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.813 1.969L.405 3.406 11 14v-2.813L1.812 1.97z"
}));

export default SvgComponent;