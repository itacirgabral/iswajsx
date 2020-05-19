function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 18l4.5-4.5L18 18H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2h-5a4 4 0 004 4h1a5 5 0 005-5V0h-1zM4 5L8.5.5 13 5H4zM9 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3S8 18.657 8 17V5h1z"
}));

export default SvgComponent;