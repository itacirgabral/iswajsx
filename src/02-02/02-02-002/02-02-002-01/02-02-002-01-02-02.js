function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 14a4 4 0 100 8 4 4 0 000-8zM11 7a4 4 0 100 8 4 4 0 000-8zM18 0a4 4 0 100 8 4 4 0 000-8z"
}));

export default SvgComponent;