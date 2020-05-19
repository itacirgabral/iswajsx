function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.958.343l9.016 9.016a4.443 4.443 0 011.237-2.298 4.5 4.5 0 016.364 6.364 4.443 4.443 0 01-2.298 1.237l8.309 8.309a4 4 0 005.657 0c3.124-3.125 3.44-7.873.707-10.607l1.414-1.414c3.515 3.514 3.198 9.53-.707 13.435a6 6 0 01-8.485 0L.544 1.757 1.958.343zm11.668 8.132a2.5 2.5 0 103.535 3.535 2.5 2.5 0 00-3.535-3.535z"
}));

export default SvgComponent;