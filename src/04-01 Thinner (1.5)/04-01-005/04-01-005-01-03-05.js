function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM12 10l5-5-.719-.719L12 8.563 7.719 4.28 7 5l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.5 6h-1V0h1v6zM23 0l5 5-.719.719L23 1.437 18.719 5.72 18 5l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 4h-1v6h1V4z"
}));

export default SvgComponent;