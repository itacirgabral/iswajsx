function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 6C7.835 6 0 13.835 0 23.5S7.835 41 17.5 41 35 33.165 35 23.5 27.165 6 17.5 6zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM12 3h11v1H12V3zM17 0a3 3 0 00-3 3h1a2 2 0 012-2h1a2 2 0 012 2h1a3 3 0 00-3-3h-1z"
}));

export default SvgComponent;