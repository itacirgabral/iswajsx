function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 2C26.06 13 33 19.94 33 28.5 33 37.06 26.06 44 17.5 44 8.94 44 2 37.06 2 28.5 2 19.94 8.94 13 17.5 13zM23 10l-5-5 .719-.719L23 8.563l4.281-4.282L28 5l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 6h1V0h-1v6zM24 6h1V0h-1v6zM12 10L7 5l.719-.719L12 8.563l4.281-4.282L17 5l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 6h1V0h-1v6zM13 6h1V0h-1v6z"
}));

export default SvgComponent;