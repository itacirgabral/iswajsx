function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29.9 16H20V6.1l1.414 1.415v7.07h7.071L29.9 16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.778 2.565a5 5 0 010 7.071l-2.121 2.121-1.414-1.414 2.121-2.121a3 3 0 000-4.243l-.707-.707a4 4 0 00-5.657 0l-6.364 6.364C10.788 12.484 9.393 20.95 9.393 20.95L.908 12.464s8.466-1.394 11.314-4.242l6.364-6.364a6 6 0 018.485 0l.707.707z"
}));

export default SvgComponent;