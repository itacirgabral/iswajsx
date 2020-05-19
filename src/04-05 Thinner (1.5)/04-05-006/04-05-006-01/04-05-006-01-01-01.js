function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 20c-2.216 0-4 1.784-4 4 0 3.324 2.676 6 6 6h3c3.324 0 6-2.676 6-6 0-2.216-1.784-4-4-4h-7zm0 1.5v5a2.495 2.495 0 01-2.5-2.5c0-1.385 1.115-2.5 2.5-2.5zm1 0h2v5h-2v-5zm3 0h2v5h-2v-5zm3 0c1.385 0 2.5 1.115 2.5 2.5s-1.115 2.5-2.5 2.5v-5z"
}));

export default SvgComponent;