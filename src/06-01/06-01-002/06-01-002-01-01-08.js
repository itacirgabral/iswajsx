function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 5a8.5 8.5 0 00-8.5 8.5 8.501 8.501 0 005 7.75V24h-3a7 7 0 00-7 7v11h2V31a5 5 0 015-5h13a5 5 0 015 5v11h2V31a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0021.5 5zM14 31v11h3V31h-3zm12 0v11h3V31h-3zM0 0h43v2H0V0z"
}));

export default SvgComponent;