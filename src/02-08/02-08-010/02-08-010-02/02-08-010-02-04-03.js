function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.95 2.364l14.142 14.142a4 4 0 005.657 0 8 8 0 000-11.314l-1.414 1.415a6 6 0 010 8.485 2 2 0 01-2.829 0L11.16 9.744c.66-.176 1.293-.498 1.812-1.016A4 4 0 007.314 3.07c-.519.518-.84 1.152-1.017 1.812L2.364.95.95 2.364zm7.778 2.121a2 2 0 112.828 2.829 2 2 0 01-2.828-2.829z"
}));

export default SvgComponent;