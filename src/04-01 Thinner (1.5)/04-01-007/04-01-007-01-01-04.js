function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 47
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 0l3.5 3.5L21 7l-.719-.719L23.063 3.5 20.28.719 21 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 3v1h-6a2 2 0 000 4h7v2H14a3.5 3.5 0 110-7h6.5zM17.5 12C7.835 12 0 19.835 0 29.5S7.835 47 17.5 47 35 39.165 35 29.5 27.165 12 17.5 12zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;