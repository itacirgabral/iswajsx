function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.05 2.1a4 4 0 000 5.657l.707.707.707-.707-.707-.707a3 3 0 010-4.242c1.562-1.562 4.728-.93 7.071 1.414l.708.707c2.108 2.108 2.828 8.485 2.828 8.485l7.778-7.778s-6.377-.72-8.485-2.828L12.95 2.1a7 7 0 00-9.9 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.222 12H8V4.222L6.586 5.636v4.95h-4.95L.222 12z"
}));

export default SvgComponent;