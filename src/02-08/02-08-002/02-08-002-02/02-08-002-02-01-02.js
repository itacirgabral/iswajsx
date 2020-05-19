function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 8l-7 7-7-7h14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0a5 5 0 015 5v3h-2V5a3 3 0 00-3-3h-1a4 4 0 00-4 4v14h-2v-4a3 3 0 00-6 0v6c0 4.028 5 11 5 11H0s5-6.972 5-11v-6a5 5 0 015-5c1.124 0 2.167.368 3 1V6a6 6 0 016-6h1z"
}));

export default SvgComponent;