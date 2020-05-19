function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 16h4v-1h-4v1zM10 10h4V9h-4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 15.5l3.5 3.5.688-.719-2.75-2.781 2.968-3-2.969-3 2.75-2.781L10.5 6 7 9.5l3 3-3 3zM24 16h4v-1h-4v1zM24 10h4V9h-4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 15.5l3.5 3.5.688-.719-2.75-2.781 2.968-3-2.968-3 2.75-2.781L24.5 6 21 9.5l3 3-3 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}));

export default SvgComponent;