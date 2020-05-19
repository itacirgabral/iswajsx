function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v7h2V2h4v8h2V0H0zM22 18a8 8 0 11-16 0 8 8 0 1116 0z"
}));

export default SvgComponent;