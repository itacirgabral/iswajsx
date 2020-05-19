function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.95 2.1a4 4 0 010 5.657l-.707.707-.707-.707.707-.707a3 3 0 000-4.242c-1.562-1.562-4.728-.93-7.071 1.414l-.708.707c-2.108 2.108-2.828 8.485-2.828 8.485L.858 5.636s6.377-.72 8.485-2.828l.707-.707a7 7 0 019.9 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.778 12H15V4.222L22.778 12z"
}));

export default SvgComponent;