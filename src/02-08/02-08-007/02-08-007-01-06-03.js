function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.05 15H5v-4.95l-.707.707v3.536H.757L.05 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.525 8.282a3.5 3.5 0 00-.331 4.575l.729-.73a2.491 2.491 0 01.31-3.137 2.5 2.5 0 013.535 0l6.717 6.717c2.014 2.014 3.536 7.778 3.536 7.778l4.95-4.95S16.206 17.015 14.192 15L7.475 8.282a3.5 3.5 0 00-4.95 0zM19.636 15H26V8.636l-.707.707v4.95h-4.95l-.707.707zM9.03 1.565a3 3 0 014.242 0l7.071 7.071c1.054 1.054 4.243 1.414 4.243 1.414l-3.536 3.536s-.36-3.189-1.414-4.243l-7.071-7.07A2 2 0 009.737 5.1l2.828 2.828-.707.707-2.829-2.828a3 3 0 010-4.243z"
}));

export default SvgComponent;