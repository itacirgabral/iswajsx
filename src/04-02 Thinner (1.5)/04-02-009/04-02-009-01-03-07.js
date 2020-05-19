function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h5v1H1v4H0V0zM3.875 6.25A4.006 4.006 0 002.72 3.406L2 4.125a3.009 3.009 0 010 4.25L.594 9.781l.687.719L2.72 9.094A4.006 4.006 0 003.875 6.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.875 6.25A5.99 5.99 0 004.125 2l-.719.719a4.99 4.99 0 010 7.062L2 11.187l.719.72L4.125 10.5a5.99 5.99 0 001.75-4.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.426 9.785a5 5 0 000-7.071l-.707.707a4 4 0 010 5.657l-1.414 1.414.707.707 1.414-1.414z",
  fill: "#fff"
}));

export default SvgComponent;