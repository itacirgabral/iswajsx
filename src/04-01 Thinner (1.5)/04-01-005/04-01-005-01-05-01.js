function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM28.5 0l-5 5 .719.719L28.5 1.437l4.281 4.282L33.5 5l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 4h1v6h-1V4zM17.5 10l-5-5 .719-.719L17.5 8.563l4.281-4.282L22.5 5l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 6h1V0h-1v6zM6.5 0l-5 5 .719.719L6.5 1.437l4.281 4.282L11.5 5l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 4h1v6H6V4z"
}));

export default SvgComponent;