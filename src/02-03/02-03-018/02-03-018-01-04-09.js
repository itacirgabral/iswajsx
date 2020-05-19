function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v29h1V7H8zM14.222 14H22v7.778L14.222 14zM18 7H4l7-7 7 7zM13 7v29h1V7h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v29h4V7H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.188 16.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L1.5 16.844l.688-.719zM7.778 24H0v7.778L7.778 24zM19.813 26.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z"
}));

export default SvgComponent;