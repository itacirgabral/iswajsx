function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.125 24.813L11 25.75c1.789 2.02 4.043 3.25 6.5 3.25s4.711-1.23 6.5-3.25l-1.125-.938C21.591 26.46 19.66 27.5 17.5 27.5s-4.09-1.04-5.375-2.688zM24 29a4 4 0 100-8v1c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v1zM11 29v-1c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3v-1a4 4 0 100 8z"
}));

export default SvgComponent;