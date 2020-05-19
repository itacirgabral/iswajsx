function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3H9C7.343 1 6 2.79 6 5v9c0 3.283 4 9 4 9H0s4-5.717 4-9V5a5 5 0 015-5h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 5l-5.5 5.5L8 5h2l3.5 3.5L17 5h2z"
}));

export default SvgComponent;