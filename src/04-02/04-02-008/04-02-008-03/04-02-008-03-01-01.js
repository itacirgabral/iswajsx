function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 10.5L10.5 7l.719.719L8.406 10.5l2.813 2.781L10.5 14 7 10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10v1h4v4h1v-5h-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 10.5L23.5 7l.719.719-2.813 2.781 2.813 2.781L23.5 14 20 10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 10v1h4v4h1v-5h-5z"
}));

export default SvgComponent;