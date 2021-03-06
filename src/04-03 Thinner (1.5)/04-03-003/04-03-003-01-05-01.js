function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0a7 7 0 000 14h1.875A15.9 15.9 0 017.5 7.5c0-2.712.684-5.262 1.875-7.5C8.582.01 7.791 0 7 0zm0 1.5h.125C6.426 3.374 6 5.382 6 7.5c0 1.733.249 3.42.719 5A5.508 5.508 0 011.5 7 5.5 5.5 0 017 1.5z"
}));

export default SvgComponent;