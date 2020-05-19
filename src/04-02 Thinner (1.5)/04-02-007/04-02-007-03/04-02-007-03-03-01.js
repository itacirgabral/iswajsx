function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8L0 4.5l.719-.719L3.5 6.594 6.281 3.78 7 4.5 3.5 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5V1h1v4H2zM4 5V1h1v4H4zM9.5 0L6 3.5l.719.719L9.5 1.406l2.781 2.813L13 3.5 9.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 3v4h1V3H8zM10 3v4h1V3h-1z"
}));

export default SvgComponent;