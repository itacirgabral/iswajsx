function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11l4.5-4.5L9 11H7.562L4.5 7.937 1.437 11H0zM14 24C8.477 24 4 19.523 4 14v-3h1v3a9 9 0 009 9h6v1h-6zM6 5L10.5.5 15 5h-1.438L10.5 1.937 7.437 5H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 18c-5.523 0-10-4.477-10-10V5h1v3a9 9 0 009 9h6v1h-6z"
}));

export default SvgComponent;