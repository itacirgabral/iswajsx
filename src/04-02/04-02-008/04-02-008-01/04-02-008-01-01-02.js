function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 10v5.657h1.016l-.022-4.663 4.663.022V10H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.188 12.469l-.72.719L14 16.718l.719-.718-3.531-3.531zM19 10v5.657h1.016l-.022-4.663 4.663.022V10H19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.188 12.469l-.72.719L25 16.718l.719-.718-3.532-3.531z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}));

export default SvgComponent;