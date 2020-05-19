function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.05 8H5V3.05l-.707.707v3.536H.757L.05 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.525 1.282a3.5 3.5 0 00-.331 4.575l.729-.73a2.491 2.491 0 01.31-3.137 2.5 2.5 0 013.535 0l6.717 6.717c2.014 2.014 3.536 7.778 3.536 7.778l4.95-4.95S16.206 10.015 14.192 8L7.475 1.282a3.5 3.5 0 00-4.95 0z"
}));

export default SvgComponent;