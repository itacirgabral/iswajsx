function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8.25v1.5h5v-1.5H7zm16 0v1.5h5v-1.5h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.75 3.5v4.188l-3.625-2.094-.75 1.312L16 9l-3.625 2.094.75 1.312 3.625-2.094V14.5h1.5v-4.188l3.625 2.094.75-1.312L19 9l3.625-2.094-.75-1.312-3.625 2.093V3.5h-1.5z"
}));

export default SvgComponent;