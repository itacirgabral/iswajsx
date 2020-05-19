function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 1c-.255 0-.508.048-.75.094v3.062c0 1.304-2.719 2.813-2.719 2.813A3.973 3.973 0 005.5 9a3.973 3.973 0 003.469-2.031S6.25 5.46 6.25 4.156V1.094C6.008 1.048 5.755 1 5.5 1z"
}));

export default SvgComponent;