function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a9 9 0 019 9v9h-4V8a6 6 0 00-6-6H0V0h18z"
}));

export default SvgComponent;