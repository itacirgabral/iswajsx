function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.485 0H11v8.485L19.485 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.1 4.243l7.072 7.07a4 4 0 005.656 0c1.172-1.17.855-3.387-.707-4.949l.707-.707 3.536-3.536a6 6 0 010 8.486l-2.121 2.12a5 5 0 01-7.071 0L.393 4.95l.708-.707z"
}));

export default SvgComponent;