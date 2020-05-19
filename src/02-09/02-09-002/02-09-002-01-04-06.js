function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v1c2.21 0 4 2.239 4 5a4 4 0 01-4 4h-7v9a3 3 0 01-3 3H0v4h6a7 7 0 007-7v-5h3a8 8 0 008-8 6 6 0 00-6-6z"
}));

export default SvgComponent;