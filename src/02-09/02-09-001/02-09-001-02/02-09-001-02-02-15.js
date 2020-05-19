function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0l7 7-7 7V0zm1 2.438v9.124L20.594 7 16 2.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 6v2H6a4 4 0 00-4 4v2a3 3 0 003 3h15v4H6a6 6 0 01-6-6v-3a6 6 0 016-6h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2.438L20.594 7 16 11.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;