function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 7v23h1V7H8zM7.778 14H0v7.778L7.778 14zM18 7H4l7-7 7 7zM13 7v23h1V7h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 7v23h4V7H9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.813 16.125l-1.438 1.406c-1.772 1.436-4.49 1.938-7.063 1.938-2.571 0-5.29-.502-7.062-1.938l-.719.719a10.97 10.97 0 007.781 3.219 10.97 10.97 0 007.782-3.219l1.406-1.406-.688-.719z"
}));

export default SvgComponent;