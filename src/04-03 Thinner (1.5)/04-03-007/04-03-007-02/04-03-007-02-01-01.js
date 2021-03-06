function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.25 0A19.9 19.9 0 00.031 12.938 5.5 5.5 0 105.5 8c-.58 0-1.132.084-1.656.25a17.004 17.004 0 013.531-6.125L5.25 0z"
}));

export default SvgComponent;