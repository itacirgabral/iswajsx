function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 25.25v1.5h4v-1.5H9zm13 0v1.5h4v-1.5h-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.75 20v4.688l-4.062-2.344-.75 1.312L16 26l-4.062 2.344.75 1.312 4.062-2.343V32h1.5v-4.688l4.063 2.344.75-1.312L19 26l4.063-2.344-.75-1.312-4.063 2.343V20h-1.5z"
}));

export default SvgComponent;