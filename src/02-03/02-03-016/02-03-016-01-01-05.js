function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 23V0h1v23H7zM13.222 7H21v7.778L13.222 7zM17 23H3l7 7 7-7zM12 23V0h1v23h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23V0h4v23H8z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.188 9.125l1.437 1.406c1.772 1.436 4.49 1.938 7.063 1.938 2.571 0 5.29-.502 7.062-1.938l.719.719a10.97 10.97 0 01-7.782 3.219 10.97 10.97 0 01-7.78-3.219L.5 9.844l.688-.719z"
}));

export default SvgComponent;