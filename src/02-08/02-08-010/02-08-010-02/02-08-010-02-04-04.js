function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33.042.343L24.026 9.36a4.443 4.443 0 00-1.237-2.298 4.5 4.5 0 00-6.364 6.364 4.443 4.443 0 002.298 1.237l-8.309 8.309a4 4 0 01-5.657 0c-3.124-3.125-3.44-7.873-.707-10.607L2.636 10.95c-3.515 3.514-3.198 9.53.707 13.435a6 6 0 008.485 0L34.456 1.757 33.042.343zM21.374 8.475a2.5 2.5 0 11-3.535 3.535 2.5 2.5 0 013.535-3.535z"
}));

export default SvgComponent;