function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 12a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14a6 6 0 100 12 6 6 0 000-12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v11.344a9.906 9.906 0 012 1.531V0h-2zM8 3v9a9.978 9.978 0 012-1.188V3H8zM2 11L.594 12.406l4.062 4.063a10.02 10.02 0 01.938-1.875L2 11z"
}));

export default SvgComponent;