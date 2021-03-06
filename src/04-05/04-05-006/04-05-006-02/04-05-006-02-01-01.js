function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 20c-2.216 0-4 1.784-4 4 0 3.324 1.784 6 4 6h7c2.216 0 4-2.676 4-6 0-2.216-1.784-4-4-4h-7zm0 2v4c-1.108 0-2-.892-2-2s.892-2 2-2zm1 0h2v4h-2v-4zm3 0h2v4h-2v-4zm3 0c1.108 0 2 .892 2 2s-.892 2-2 2v-4zM5 16v1H4v1h1v2H4v1h1v1h1v-1h2v1h1v-1h1v-1H9v-2h1v-1H9v-1H8v1H6v-1H5zm1 2h2v2H6v-2zM26 16v1h-1v1h1v2h-1v1h1v1h1v-1h2v1h1v-1h1v-1h-1v-2h1v-1h-1v-1h-1v1h-2v-1h-1zm1 2h2v2h-2v-2z"
}));

export default SvgComponent;