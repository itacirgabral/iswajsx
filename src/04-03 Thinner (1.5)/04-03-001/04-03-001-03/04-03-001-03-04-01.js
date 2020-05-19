function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.188.25L12 6.5 1.188 12.75C.418 10.742.142 8.63.001 6.5-.026 4.348.539 2.278 1.188.25zm.875 2.25c-.334 1.288-.562 2.607-.562 4 0 1.393.228 2.712.562 4l6.906-4-6.906-4z"
}));

export default SvgComponent;