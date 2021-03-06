function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 23v6h10v-6h-1v4.5h-2V23h-1v4.5h-2V23h-1v4.5h-2V23h-1zM10 14v4h1v-4h-1zm2 0v4h1v-4h-1zm4 0v4h1v-4h-1zm2 0v4h1v-4h-1zm4 0v4h1v-4h-1zm2 0v4h1v-4h-1zM8.5 17l-.719.719 3.719 3.687 3-2.968 3 2.968 3-2.968 3 2.968 3.719-3.687L26.5 17l-3 3-3-3-3 3-3-3-3 3-3-3z"
}));

export default SvgComponent;