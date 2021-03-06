function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h8V9H7zm11 0v2h14V9H18zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM27 3l-4.5 4.5L18 3h1.406L22.5 6.094 25.594 3H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 0C17.567 0 16 1.343 16 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z"
}));

export default SvgComponent;