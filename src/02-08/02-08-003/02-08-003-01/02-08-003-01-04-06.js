function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0a4 4 0 014 4v17H5v-6.406A2.98 2.98 0 013.5 15a3 3 0 010-6c.547 0 1.058.15 1.5.406V4a2 2 0 00-2-2 1 1 0 00-1 1v5H0V3a3 3 0 013-3zm.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
}));

export default SvgComponent;