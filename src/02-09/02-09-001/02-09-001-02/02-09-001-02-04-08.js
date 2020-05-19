function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h9a4 4 0 014 4v2a3 3 0 01-3 3H9v4a6 6 0 006-6V6a6 6 0 00-6-6H0z"
}));

export default SvgComponent;