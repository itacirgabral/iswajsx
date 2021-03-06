function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C13.835 0 6 7.835 6 17.5S13.835 35 23.5 35 41 27.165 41 17.5 33.165 0 23.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10a7 7 0 000 14c.084 0 .167.003.25 0-.196-.49-.352-.99-.5-1.5A5.506 5.506 0 011.5 17 5.5 5.5 0 017 11.5h.063c.189-.5.397-.988.625-1.469A7.138 7.138 0 007 10z"
}));

export default SvgComponent;