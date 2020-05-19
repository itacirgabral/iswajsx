function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h7L8 7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.5a9.956 9.956 0 00-2.938-7.063l-1.187-1.312-.75.75 1.25 1.25A8.988 8.988 0 0115 11.5a8.988 8.988 0 01-2.625 6.375L8 22.281l.719.719 4.344-4.438A9.956 9.956 0 0016 11.5zM0 23h7l-7-7v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11.5a9.956 9.956 0 01-2.938 7.063l-1.187 1.312-.75-.75 1.25-1.25A8.988 8.988 0 007 11.5a8.988 8.988 0 00-2.625-6.375L0 .719.719 0l4.343 4.438A9.956 9.956 0 018 11.5z"
}));

export default SvgComponent;