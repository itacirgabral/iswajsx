function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 0l9 9h-2l-7-7-7 7h-2l9-9zM24 9v11a6 6 0 01-6 6H0v4h17a9 9 0 009-9V9h-2z"
}));

export default SvgComponent;