function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0a5 5 0 015 5v3h-2V5a3 3 0 00-3-3H6a4 4 0 00-4 4v8.563A3.99 3.99 0 014 14a4 4 0 110 8 3.99 3.99 0 01-2-.563V32H0V6a6 6 0 016-6h1zM4 16a2 2 0 100 4 2 2 0 000-4z"
}));

export default SvgComponent;