function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0a4 4 0 00-4 4v1h2V4a2 2 0 012-2h1a3 3 0 013 3v10l2.375-4.156c.362-.511.95-.844 1.625-.844a3 3 0 013 3v2c0 3.283-4 9-4 9h10s-4-5.717-4-9v-2a5 5 0 00-5-5c-.73 0-1.41.221-2 .563V5a5 5 0 00-5-5H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5l6 6 6-6h-2L6 9 2 5H0z"
}));

export default SvgComponent;