function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.75 11v12h1.5V11h-1.5zM20.5 10l-.72.719 2.782 2.781-3.5 3.5 3.5 3.5-2.781 2.781.719.719 3.5-3.5-3.5-3.5 3.5-3.5-3.5-3.5zM14.5 10l.719.719-2.781 2.781 3.5 3.5-3.5 3.5 2.78 2.781L14.5 24 11 20.5l3.5-3.5-3.5-3.5 3.5-3.5z"
}));

export default SvgComponent;